const getHealthCheckInstance = require('../modules/get-health-check');
const getReadinessCheckInstance = require('../modules/get-readiness');
const getMetadataInstance = require('../modules/get-metadata');
const getReportInstance = require('../modules/get-report');
const saveDataInstance = require('../modules/save-gitlab-data');
const clearDataInstance = require('../modules/clear-gitlab-data');

const getHealthCheckService = async () => {
	await getHealthCheckInstance.businessLogic();
};

const getReadinessCheckService = async (params) => {
	await getReadinessCheckInstance.businessLogic(params);
};

const getMetadataService = async () => {
	await getMetadataInstance.businessLogic();
};

const getReportService = async () => {
	await getReportInstance.businessLogic();
};

const saveDataService = async () => {
	await saveDataInstance.businessLogic();
};

const clearDataService = async () => {
	await clearDataInstance.businessLogic();
};

module.exports = {
	getHealthCheckService,
	getReadinessCheckService,
	getMetadataService,
	getReportService,
	saveDataService,
	clearDataService,
};
