const saveGitlabDataInstance = require("../modules/save-gitlab-data");
const clearGitlabDataInstance = require("../modules/clear-gitlab-data");
const Responses = require("../untils/API_Responses");

const saveGitlabDataService = async (params) => {
  try {
    const logicResult = await saveGitlabDataInstance.businessLogic(params);
    return logicResult;
  } catch (err) {
    return Responses._400({ status_code: 400, error_message: err });
  }
};

const clearGitlabDataService = async (params) => {
  try {
    const logicResult = await clearGitlabDataInstance.businessLogic(params);
    return logicResult;
  } catch (err) {
    return Responses._400({ status_code: 400, error_message: err });
  }
};

module.exports = {
  saveGitlabDataService,
  clearGitlabDataService,
};
