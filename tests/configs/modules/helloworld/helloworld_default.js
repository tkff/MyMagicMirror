/* Magic Mirror Test config sample module hello world default config
 *
 * By Rodrigo Ramírez Norambuena https://rodrigoramirez.com
 * MIT Licensed.
 */
let config = require(process.cwd() + "/tests/configs/default.js").configFactory({
	modules: [
		{
			module: "helloworld",
			position: "bottom_bar"
		}
	]
});

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
