let config = {
<<<<<<< HEAD
	address: "0.0.0.0",
	ipWhitelist: [],
=======
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
	units: "imperial",

	modules: [
		{
			module: "weather",
			position: "bottom_bar",
			config: {
				type: "forecast",
				location: "Munich",
<<<<<<< HEAD
				weatherProvider: "openweathermap",
				weatherEndpoint: "/forecast/daily",
				mockData: '"#####WEATHERDATA#####"',
=======
				mockData: '"#####WEATHERDATA#####"',
				weatherEndpoint: "/forecast/daily",
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
				decimalSymbol: "_",
				showPrecipitationAmount: true
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
