let config = {
<<<<<<< HEAD
	address: "0.0.0.0",
	ipWhitelist: [],
=======
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
	timeFormat: 12,

	modules: [
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Rodrigo Ramirez Blog",
						url: "http://localhost:8080/tests/mocks/newsfeed_test.xml"
					}
				],
				prohibitedWords: ["QPanel"],
				showDescription: true
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
