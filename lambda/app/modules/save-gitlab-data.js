const Responses = require("../untils/API_Responses");
const Dynamo = require("../models/Dynamo");
const constant = require("../untils/constants");
const { objectValidateUtils } = require("../untils/data-validate-utils");
const tableName = process.env.tableName;

const validateRequestData = async (params) => {
  const validate_field_list = [
    { attr: "health_status", type: constant.FIELD_VALIDATE_TYPE.REQUIRED },
    { attr: "health_status", type: constant.FIELD_VALIDATE_TYPE.STRING },
    { attr: "readiness_status", type: constant.FIELD_VALIDATE_TYPE.REQUIRED },
    { attr: "readiness_status", type: constant.FIELD_VALIDATE_TYPE.STRING },
    { attr: "gitlab_version", type: constant.FIELD_VALIDATE_TYPE.REQUIRED },
    { attr: "gitlab_version", type: constant.FIELD_VALIDATE_TYPE.STRING },
  ];

  return objectValidateUtils(params, validate_field_list);
};

const businessLogic = async (params) => {
  try {
    const { health_status, readiness_status, gitlab_version } = params.data;
    const valid = await validateRequestData(params.data);
    if (!valid) {
      return Responses._400({
        status_code: 400,
        message: "error-request-data",
      });
    }

    // create gitlab Item from dynamodb
    const gitlab_item = await Dynamo.put(
      {
        health_status: health_status,
        readiness_status: readiness_status,
        gitlab_version: gitlab_version,
      },
      tableName
    ).catch((err) => {
      console.log("error in dynamo put", err);
      return null;
    });

    if (!gitlab_item) {
      return Responses._400({
        status_code: 400,
        error_message: "Failed to put gitlab item",
      });
    }

    return Responses._200({ gitlab_item });
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
