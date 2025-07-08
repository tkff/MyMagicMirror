let config = {
<<<<<<< HEAD
	address: "0.0.0.0",
	ipWhitelist: [],
=======
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
	timeFormat: 12,

	modules: [
		{
			module: "calendar",
			position: "bottom_bar",
			config: {
				maximumEntries: 30,
				hideDuplicates: false,
				calendars: [
					{
						maximumEntries: 15,
						maximumNumberOfDays: 10000,
						url: "http://localhost:8080/tests/mocks/calendar_test.ics" // contains 11 events
					},
					{
						maximumEntries: 15,
						maximumNumberOfDays: 10000,
						url: "http://localhost:8080/tests/mocks/calendar_test_clone.ics" // clone of upper calendar
					}
				]
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
