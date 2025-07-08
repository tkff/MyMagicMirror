let config = {
<<<<<<< HEAD
	address: "0.0.0.0",
	ipWhitelist: [],
=======
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
	modules: [
		{
			module: "helloworld",
			position: "top_bar",
			header: "test_header",
			config: {
				text: "Test Display Header"
			}
		},
		{
			module: "helloworld",
			position: "bottom_bar",
			config: {
				text: "Test Hide Header"
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
