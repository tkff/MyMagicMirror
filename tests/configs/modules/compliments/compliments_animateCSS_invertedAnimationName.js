let config = {
<<<<<<< HEAD
	address: "0.0.0.0",
	ipWhitelist: [],
=======
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
	modules: [
		{
			module: "compliments",
			position: "lower_third",
			animateIn: "flipOutX",
			animateOut: "flipInX",
			config: {
				compliments: {
					anytime: ["AnimateCSS Testing..."]
				},
				updateInterval: 2000,
				fadeSpeed: 1000
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
