const config = require('../config/config.json');
const axios = require('axios');

const businessLogic = async () => {
	try {
		const res = await axios.post(`${config.SERVER_URL}/gitlab-controller`, {
			method: 'clear-gitlab-data'
		});

		if (res && res.status == 200) {
			console.log('clear gitlab data successfully');
		}
		return res.data;
	} catch (error) {
		console.log('error: lambda endpoint no response found');
	}
};

module.exports = {
	businessLogic
};
