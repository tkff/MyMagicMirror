const execSync = require("node:child_process").execSync;
<<<<<<< HEAD
const path = require("node:path");

const rootPath = path.resolve(`${__dirname}/../`);
const Log = require(`${rootPath}/js/logger.js`);
const os = require("node:os");
const fs = require("node:fs");
const si = require("systeminformation");

const modulePositions = []; // will get list from index.html
const regionRegEx = /"region ([^"]*)/i;
const indexFileName = "index.html";
const discoveredPositionsJSFilename = "js/positions.js";

=======
const Log = require("logger");
const si = require("systeminformation");

>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
module.exports = {

	async logSystemInformation  () {
		try {
			let installedNodeVersion = execSync("node -v", { encoding: "utf-8" }).replace("v", "").replace(/(?:\r\n|\r|\n)/g, "");

			const staticData = await si.get({
				system: "manufacturer, model, raspberry, virtual",
				osInfo: "platform, distro, release, arch",
				versions: "kernel, node, npm, pm2"
			});
			let systemDataString = "System information:";
<<<<<<< HEAD
			systemDataString += `\n### SYSTEM:   manufacturer: ${staticData.system.manufacturer}; model: ${staticData.system.model}; virtual: ${staticData.system.virtual}`;
			systemDataString += `\n### OS:       platform: ${staticData.osInfo.platform}; distro: ${staticData.osInfo.distro}; release: ${staticData.osInfo.release}; arch: ${staticData.osInfo.arch}; kernel: ${staticData.versions.kernel}`;
			systemDataString += `\n### VERSIONS: electron: ${process.versions.electron}; used node: ${staticData.versions.node}; installed node: ${installedNodeVersion}; npm: ${staticData.versions.npm}; pm2: ${staticData.versions.pm2}`;
=======
			systemDataString += `\n### SYSTEM:   manufacturer: ${staticData["system"]["manufacturer"]}; model: ${staticData["system"]["model"]}; raspberry: ${staticData["system"]["raspberry"]}; virtual: ${staticData["system"]["virtual"]}`;
			systemDataString += `\n### OS:       platform: ${staticData["osInfo"]["platform"]}; distro: ${staticData["osInfo"]["distro"]}; release: ${staticData["osInfo"]["release"]}; arch: ${staticData["osInfo"]["arch"]}; kernel: ${staticData["versions"]["kernel"]}`;
			systemDataString += `\n### VERSIONS: electron: ${process.versions.electron}; used node: ${staticData["versions"]["node"]}; installed node: ${installedNodeVersion}; npm: ${staticData["versions"]["npm"]}; pm2: ${staticData["versions"]["pm2"]}`;
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
			systemDataString += `\n### OTHER:    timeZone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}; ELECTRON_ENABLE_GPU: ${process.env.ELECTRON_ENABLE_GPU}`;
			Log.info(systemDataString);

			// Return is currently only for jest
			return systemDataString;
		} catch (e) {
			Log.error(e);
		}
<<<<<<< HEAD
	},

	// return all available module positions
	getAvailableModulePositions () {
		return modulePositions;
	},

	// return if position is on modulePositions Array (true/false)
	moduleHasValidPosition (position) {
		if (this.getAvailableModulePositions().indexOf(position) === -1) return false;
		return true;
	},

	getModulePositions () {
		// if not already discovered
		if (modulePositions.length === 0) {
			// get the lines of the index.html
			const lines = fs.readFileSync(indexFileName).toString().split("\n");
			// loop thru the lines
			lines.forEach((line) => {
				// run the regex on each line
				const results = regionRegEx.exec(line);
				// if the regex returned something
				if (results && results.length > 0) {
					// get the position parts and replace space with underscore
					const positionName = results[1].replace(" ", "_");
					// add it to the list
					modulePositions.push(positionName);
				}
			});
			try {
				fs.writeFileSync(discoveredPositionsJSFilename, `const modulePositions=${JSON.stringify(modulePositions)}`);
			}
			catch (error) {
				console.error("unable to write js/positions.js with the discovered module positions\nmake the MagicMirror/js folder writeable by the user starting MagicMirror");
			}
		}
		// return the list to the caller
		return modulePositions;
=======
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
	}
};
