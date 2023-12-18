const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	readiness: {
       type: `string`,
	   alias: `r`,
	   default: ``,
	   desc: 'specify a query parameter for readiness. eg -r 1 or --readiness 1' 
	}
};

const commands = {
	help: { desc: `Print help info` },
	health: { desc: `Print gitlab health status`},
	readiness: { desc: `Print gitlab readiness status`},
	metadata: { desc: `Print gitlab metadata`},
	save: {desc:`Save gitlab data with timestamp`},
	report: { desc: `Generate gitlab report, file path: ./report/`},
	clear: {desc: `Clear gitlab data`},
};

const helpText = meowHelp({
	name: `gitcheck`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
