const path = require("node:path");
const fs = require("node:fs");
<<<<<<< HEAD
const Ajv = require("ajv");
const colors = require("ansis");
const globals = require("globals");
const { Linter } = require("eslint");

const rootPath = path.resolve(`${__dirname}/../`);
const Log = require(`${rootPath}/js/logger.js`);
const Utils = require(`${rootPath}/js/utils.js`);

const linter = new Linter({ configType: "flat" });
const ajv = new Ajv();
=======
const colors = require("ansis");
const { Linter } = require("eslint");

const linter = new Linter();

const rootPath = path.resolve(`${__dirname}/../`);
const Log = require(`${rootPath}/js/logger.js`);
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67

/**
 * Returns a string with path of configuration file.
 * Check if set by environment variable MM_CONFIG_FILE
 * @returns {string} path and filename of the config file
 */
function getConfigFile () {
	// FIXME: This function should be in core. Do you want refactor me ;) ?, be good!
	return path.resolve(process.env.MM_CONFIG_FILE || `${rootPath}/config/config.js`);
}

/**
 * Checks the config file using eslint.
 */
function checkConfigFile () {
	const configFileName = getConfigFile();

	// Check if file is present
	if (fs.existsSync(configFileName) === false) {
<<<<<<< HEAD
		throw new Error(`File not found: ${configFileName}\nNo config file present!`);
=======
		Log.error(`File not found: ${configFileName}`);
		throw new Error("No config file present!");
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
	}

	// Check permission
	try {
		fs.accessSync(configFileName, fs.F_OK);
<<<<<<< HEAD
	} catch (error) {
		throw new Error(`${error}\nNo permission to access config file!`);
	}

	// Validate syntax of the configuration file.
	Log.info(`Checking config file ${configFileName} ...`);
=======
	} catch (e) {
		Log.error(e);
		throw new Error("No permission to access config file!");
	}

	// Validate syntax of the configuration file.
	Log.info("Checking file... ", configFileName);
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67

	// I'm not sure if all ever is utf-8
	const configFile = fs.readFileSync(configFileName, "utf-8");

<<<<<<< HEAD
	const errors = linter.verify(
		configFile,
		{
			languageOptions: {
				ecmaVersion: "latest",
				globals: {
					...globals.node
				}
			}
		},
		configFileName
	);

	if (errors.length === 0) {
		Log.info(colors.green("Your configuration file doesn't contain syntax errors :)"));
		validateModulePositions(configFileName);
	} else {
		let errorMessage = "Your configuration file contains syntax errors :(";

		for (const error of errors) {
			errorMessage += `\nLine ${error.line} column ${error.column}: ${error.message}`;
		}
		throw new Error(errorMessage);
	}
}

function validateModulePositions (configFileName) {
	Log.info("Checking modules structure configuration ...");

	const positionList = Utils.getModulePositions();

	// Make Ajv schema configuration of modules config
	// Only scan "module" and "position"
	const schema = {
		type: "object",
		properties: {
			modules: {
				type: "array",
				items: {
					type: "object",
					properties: {
						module: {
							type: "string"
						},
						position: {
							type: "string",
							enum: positionList
						}
					},
					required: ["module"]
				}
			}
		}
	};

	// Scan all modules
	const validate = ajv.compile(schema);
	const data = require(configFileName);

	const valid = validate(data);
	if (valid) {
		Log.info(colors.green("Your modules structure configuration doesn't contain errors :)"));
	} else {
		const module = validate.errors[0].instancePath.split("/")[2];
		const position = validate.errors[0].instancePath.split("/")[3];
		let errorMessage = "This module configuration contains errors:";
		errorMessage += `\n${JSON.stringify(data.modules[module], null, 2)}`;
		if (position) {
			errorMessage += `\n${position}: ${validate.errors[0].message}`;
			errorMessage += `\n${JSON.stringify(validate.errors[0].params.allowedValues, null, 2).slice(1, -1)}`;
		} else {
			errorMessage += validate.errors[0].message;
		}
		Log.error(errorMessage);
	}
}

try {
	checkConfigFile();
} catch (error) {
	Log.error(error.message);
	process.exit(1);
}
=======
	// Explicitly tell linter that he might encounter es6 syntax ("let config = {...}")
	const errors = linter.verify(configFile, {
		env: {
			es6: true
		}
	});

	if (errors.length === 0) {
		Log.info(colors.green("Your configuration file doesn't contain syntax errors :)"));
	} else {
		Log.error(colors.red("Your configuration file contains syntax errors :("));

		for (const error of errors) {
			Log.error(`Line ${error.line} column ${error.column}: ${error.message}`);
		}
	}
}

checkConfigFile();
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
