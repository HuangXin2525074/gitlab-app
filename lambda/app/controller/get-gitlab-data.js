const Responses = require("../untils/API_Responses");
const Dynamo = require("../models/Dynamo");

const tableName = process.env.tableName;

exports.handler = async (event) => {
  console.log("event", event);

  const gitlab_items = await Dynamo.get(tableName).catch((err) => {
    console.log("error in Dynamo Get", err);
    return null;
  });

  if (!gitlab_items) {
    return Responses._400({
      status_code: 400,
      error_message: "error in Dynamo Get",
    });
  }

  return Responses._200({ gitlab_items });
};
