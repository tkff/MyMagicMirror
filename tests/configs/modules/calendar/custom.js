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
				customEvents: [{ keyword: "CustomEvent", symbol: "dice", eventClass: "undo" }],
				forceUseCurrentTime: true,
				calendars: [
					{
						maximumEntries: 5,
<<<<<<< HEAD
						pastDaysCount: 5,
						broadcastPastEvents: true,
=======
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
						maximumNumberOfDays: 10000,
						symbol: "birthday-cake",
						fullDaySymbol: "calendar-day",
						recurringSymbol: "undo",
						url: "http://localhost:8080/tests/mocks/calendar_test_icons.ics"
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
