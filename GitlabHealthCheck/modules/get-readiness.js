const config = require('../config/config.json');
const axios = require('axios');

const businessLogic = async params => {
	try {
		const param = params ? `readiness?all=${params}` : `readiness`;
		const res = await axios.get(`${config.GITLAB_ENDPOINT}-/${param}`);
		// res = {
		// 	status: 200,
		// 	data: {
		// 		status: 'ok',
		// 		dependencies: {
		// 			database: 'ok',
		// 			redis: 'ok',
		// 			cache: 'ok',
		// 			external_service: 'ok'
		// 		}
		// 	}
		// };

		console.log('readiness response:', res.data);
		return res.data;
	} catch (error) {
		console.log('error: gitlab endpoint no response found');
	}
};

module.exports = {
	businessLogic
};
