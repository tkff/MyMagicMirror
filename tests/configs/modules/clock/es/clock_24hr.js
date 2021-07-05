/* Magic Mirror Test config for default clock module
 *
 * By Rodrigo Ramírez Norambuena https://rodrigoramirez.com
 * MIT Licensed.
 */
const configFactory = require('../../../default.js')

const config = configFacory({
	language: "es",

	modules: [
		{
			module: "clock",
			position: "middle_center"
		}
	]
});

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
