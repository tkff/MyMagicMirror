let config = {
<<<<<<< HEAD
	address: "0.0.0.0",
	ipWhitelist: [],
=======
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
	timeFormat: 12,

	modules: [
		{
			module: "weather",
			position: "bottom_bar",
			config: {
				type: "hourly",
				location: "Berlin",
<<<<<<< HEAD
				weatherProvider: "openweathermap",
				weatherEndpoint: "/onecall",
=======
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
				mockData: '"#####WEATHERDATA#####"'
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
