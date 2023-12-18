const AWS = require("aws-sdk");

const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
  async get(TableName) {
    const params = {
      TableName,
    };

    const data = await documentClient.scan(params).promise();
    const items = data.Items;
    // Sort items by timestamp in ascending order
    items.sort((a, b) => a.timestamp - b.timestamp);

    return items;
  },
  async put(data, TableName) {
    const params = {
      TableName,
      Item: {
        timestamp: Date.now(),
        health_status: data.health_status,
        readiness_status: data.readiness_status,
        gitlab_version: data.gitlab_version,
      },
    };

    const res = await documentClient.put(params).promise();

    if (!res) {
      throw Error(`There was an error inserting ${data} in table ${TableName}`);
    }

    return data;
  },
  async deleteAllItems(TableName) {
    const params = {
      TableName,
    };

    // Perform a Scan operation to retrieve all items
    const res = await documentClient.scan(params).promise();

    if (!res) {
      throw Error(`There was an error deleting data in table ${TableName}`);
    }

    const deletePromises = res.Items.map((item) => {
      const deleteParams = {
        TableName,
        Key: {
          timestamp: item.timestamp,
        },
      };
      return documentClient.delete(deleteParams).promise();
    });
    // Wait for all delete operations to complete
    await Promise.all(deletePromises);
  },
};
module.exports = Dynamo;
