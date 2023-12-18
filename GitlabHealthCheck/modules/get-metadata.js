const config = require('../config/config.json');
const axios = require('axios');

const businessLogic = async () => {
	try {
		const res = await axios.get(`${config.GITLAB_ENDPOINT}metadata`);
		// res = {
		// 	status: 200,
		// 	data: {
		// 		// version: '15.2-pre',
		// 		revision: 'c401a659d0c',
		// 		kas: {
		// 			enabled: true,
		// 			externalUrl: 'grpc://gitlab.example.com:8150',
		// 			version: '15.0.0'
		// 		},
		// 		enterprise: true
		// 	}
		// };
		console.log('metadata response:', res.data);

		return res.data;
	} catch (error) {
		console.log('error: gitlab endpoint no response found');
	}
};

module.exports = {
	businessLogic
};
