const config = require('../config/config.json');
const axios = require('axios');

const businessLogic = async () => {
	try {
		const res = await axios.get(`${config.GITLAB_ENDPOINT}-/health`);
		// res = {
		// 	status: 200,
		// 	data: {
		// 		status: 'ok',
		// 		details: {
		// 			database: 'ok',
		// 			redis: 'ok',
		// 			storage: 'ok',
		// 			other_service: 'ok'
		// 		}
		// 	}
		// };
		console.log('health response:', res.data);
		return res.data;
	} catch (error) {
		console.log('error: gitlab endpoint no response found');
	}
};

module.exports = {
	businessLogic
};
