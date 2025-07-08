<<<<<<< HEAD
/*
 * MagicMirror² Test calendar exdate
=======
/* MagicMirror² Test calendar exdate
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
 *
 * By jkriegshauser
 * MIT Licensed.
 *
 * See issue #3250
 * See tests/electron/modules/calendar_spec.js
 */
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
				maximumEntries: 100,
				calendars: [
					{
						maximumEntries: 100,
						maximumNumberOfDays: 28, // 4 weeks, 2 of which are skipped
						url: "http://localhost:8080/tests/mocks/exdate_la_before_midnight.ics"
					}
				]
			}
		}
	]
};

<<<<<<< HEAD
=======
Date.now = () => {
	return new Date("19 Oct 2023 12:30:00 GMT-07:00").valueOf();
};

>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
