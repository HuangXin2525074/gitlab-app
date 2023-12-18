const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function writeDataToCsv(data, headers, filePath) {
	// Define the headers for the CSV file
	const csvWriter = createCsvWriter({
		path: filePath,
		header: headers
	});

	// Write the data to the CSV file
	return csvWriter
		.writeRecords(data)
		.then(() => {
			console.log('CSV file written successfully');
		})
		.catch(err => {
			console.error('Error writing CSV file:', err);
		});
}

module.exports = {
	writeDataToCsv
};
