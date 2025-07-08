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
				location: "Munich",
<<<<<<< HEAD
				weatherProvider: "openweathermap",
				weatherEndpoint: "/weather",
				mockData: '"#####WEATHERDATA#####"',
				decimalSymbol: ",",
				showHumidity: "wind"
=======
				mockData: '"#####WEATHERDATA#####"',
				decimalSymbol: ",",
				showHumidity: true
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
