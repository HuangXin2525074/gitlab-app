const Responses = require("../untils/API_Responses");
const Dynamo = require("../models/Dynamo");
const tableName = process.env.tableName;

const businessLogic = async (params) => {
  try {
    // create gitlab Item from dynamodb
     await Dynamo.deleteAllItems(tableName).catch((err) => {
      console.log("error in dynamo deleting", err);
    });

    return Responses._200({status:'success'});
  } catch (err) {
    console.log(err);
    return Responses._400({
      status_code: 400,
      error_message: "Failed to put gitlab item",
    });
  }
};

module.exports = {
  businessLogic,
};
