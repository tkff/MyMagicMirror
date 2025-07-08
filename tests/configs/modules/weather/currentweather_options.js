let config = {
<<<<<<< HEAD
	address: "0.0.0.0",
	ipWhitelist: [],
=======
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
	modules: [
		{
			module: "weather",
			position: "bottom_bar",
			config: {
				location: "Munich",
<<<<<<< HEAD
				weatherProvider: "openweathermap",
				weatherEndpoint: "/weather",
=======
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
				mockData: '"#####WEATHERDATA#####"',
				windUnits: "beaufort",
				showWindDirectionAsArrow: true,
				showSun: false,
<<<<<<< HEAD
				showHumidity: "wind",
=======
				showHumidity: true,
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
				roundTemp: true,
				degreeLabel: true
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
