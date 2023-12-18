#!/usr/bin/env node

/**
 * GitlabHealthCheck
 * get health check from gitlab api
 *
 * @author Huang Xin <www.github.com>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;
const {
	getHealthCheckService,
	getReadinessCheckService,
	getMetadataService,
	getReportService,
	saveDataService,
	clearDataService,
} = require('./service/gitlab-service');

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	if (input.includes(`health`)) {
		await getHealthCheckService();
		return;
	}
	if (input.includes(`readiness`)) {
		await getReadinessCheckService(flags.readiness);
		return;
	}

	if (input.includes(`metadata`)) {
		await getMetadataService();
		return;
	}

	if (input.includes(`save`)) {
		await saveDataService();
		return;
	}

	if (input.includes(`report`)) {
		await getReportService();
		return;
	}
	if (input.includes(`clear`)) {
		await clearDataService();
		return;
	}
})();
