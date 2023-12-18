const config = require('../config/config.json');
const axios = require('axios');
const getHealthCheckInstance = require('./get-health-check');
const getReadinessCheckInstance = require('./get-readiness');
const getMetadataInstance = require('./get-metadata');

const businessLogic = async () => {
	try {
		let gitlab_data = {
			health_status: '',
			readiness_status: '',
			gitlab_version: ''
		};
		// get health status
		const health_res = await getHealthCheckInstance.businessLogic();
		gitlab_data.health_status = health_res.status
			? health_res.status
			: 'failed';

		// get readiness status
		const readiness_res = await getReadinessCheckInstance.businessLogic();
		gitlab_data.readiness_status = readiness_res.status
			? readiness_res.status
			: 'failed';

		// get metadata
		const metadata_res = await getMetadataInstance.businessLogic();
		gitlab_data.gitlab_version = metadata_res.version
			? metadata_res.version
			: 'failed';

		console.log('gitlab_data:', gitlab_data);

		const res = await axios.post(`${config.SERVER_URL}/gitlab-controller`, {
			method: 'save-gitlab-data',
			data: gitlab_data
		});

		if (res && res.status == 200) {
			console.log('save gitlab data successfully');
		}
		return res.data;
	} catch (error) {
		console.log('error: lambda endpoint no response found');
	}
};

module.exports = {
	businessLogic
};
