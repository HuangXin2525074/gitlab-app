const axios = require('axios');
const config = require('../config/config.json');
const constant = require('../utils/constant');
const moment = require('moment');
const { writeDataToCsv } = require('../utils/csvHelper');

const businessLogic = async () => {
	try {
		const res = await axios.get(`${config.SERVER_URL}/get-gitlab-data`);

		let file_data;
		if (!res || !res.data) {
			console.log('endpoint error');
			return;
		}
		file_data =
			res.data.gitlab_items.length > 0 ? res.data.gitlab_items : null;
		const header = [
			{
				id: constant.GITLAB_HEADE.TIMESTAMP.ID,
				title: constant.GITLAB_HEADE.TIMESTAMP.TITLE
			},
			{
				id: constant.GITLAB_HEADE.HEALTH.ID,
				title: constant.GITLAB_HEADE.HEALTH.TITLE
			},
			{
				id: constant.GITLAB_HEADE.READINESS.ID,
				title: constant.GITLAB_HEADE.READINESS.TITLE
			},
			{
				id: constant.GITLAB_HEADE.VERSION.ID,
				title: constant.GITLAB_HEADE.VERSION.TITLE
			}
		];
		const path = config.file_path;
		if (file_data) {
			file_data.forEach(element => {
				element.timestamp = moment(element.timestamp).format();
			});
			await writeDataToCsv(file_data, header, path);
		} else {
			console.log(
				`Error: The error is likely occurring because the data required to generate the report is empty. To resolve this issue, please use "save" commend to save the necessary data\n`
			);
		}

		return;
	} catch (error) {
		console.log('error: lambda endpoint no response found');
	}
};

module.exports = {
	businessLogic
};
