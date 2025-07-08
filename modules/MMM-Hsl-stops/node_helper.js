/* Magic Mirror
 * Node Helper: MMM-Hsl-stops
 *
 * By Magnus Huldén
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");
var debug = false;
var moment = require('moment');
const fetch = require('node-fetch');

module.exports = NodeHelper.create({
	updateTimer: "",
	start: function () {
		this.timesUpdated = 1;
		this.started = false;
		if (debug) { console.log("DEBUG: " + this.name + " NodeHelper started") };
	},

	// Apply all filters to dataset and return filtered object
	tripFilters: function (obj, filter, timeToStop) {
		if (debug) { console.log("DEBUG: Adding next arrival to dataset"); };
		for (i in obj) {
			obj[i] = this.addNextArrival(obj, obj[i], i);
		}
		if (debug) { console.log("DEBUG: Filtering trips with routeIdFilter"); };
		var obj = this.filterRoutes(obj, filter);
		var obj = this.filterTimes(obj, timeToStop);
		return obj;
	},

	// Search for next arrival time for the same route for the current trip and append it to the object
	addNextArrival: function (obj, objEntry, objKeyId) {
		objEntry.next = "";
		objEntry.next.realtime = false;
		for (i = objKeyId; i < Object.keys(obj).length; i++) {
			if ((objEntry.trip.route.shortName === obj[i].trip.route.shortName) && (objKeyId != i)) {
				if (obj[i].realtime) {
					objEntry.trip.next = obj[i].realtimeArrival;
				}
				else {
					objEntry.trip.next = obj[i].scheduledArrival;
				}
				objEntry.trip.nextrealtime = obj[i].realtime;
				break;
			}
		}
		return objEntry;
	},

	// Strip from dataset entries that are impropable to make to in time according to given travel time to stop
	filterTimes: function (obj, timeToStop) {
		var filteredObj = [];
		for (i in obj) {
			if (obj[i].realtime) {
				var arrivalTime = moment.unix(obj[i].serviceDay + obj[i].realtimeArrival);
			}
			else {
				var arrivalTime = moment.unix(obj[i].serviceDay + obj[i].scheduledArrival);
			}

			var diff = moment.duration(moment(arrivalTime) - moment.now());
			var min = diff.minutes() + diff.hours() * 60;
			if (debug) { console.log("arrivalTime -> " + min + " timeToStop -> " + timeToStop) };
			if (timeToStop - 2 <= min) {
				filteredObj.push(obj[i])
			}
		}
		return filteredObj;
	},

	// Include only routes listed in routeIdFilter
	filterRoutes: function (obj, filter) {
		var filteredObj = [];
		if (!this.isEmpty(filter)) {
			for (i in obj) {
				if (filter.includes(obj[i].trip.route.shortName)) {
					filteredObj.push(obj[i]);
				}
			}
			return filteredObj;
		}
		else {
			return obj;
		}
	},

	// Check if given object is empty
	isEmpty: function (obj) {
		if (obj == null) return true;
		if (obj.length > 0) return false;
		if (obj.length === 0) return true;
		if (typeof obj !== "object") return true;
		for (var key in obj) {
			if (hasOwnProperty.call(obj, key)) return false;
		}
		return true;
	},

	// If test-data is used pass data through time machine to match current date
	temporalShift: function (obj) {
		for (i in obj) {
			obj[i].serviceDay = moment().startOf('day').valueOf();
		}
		return obj;
	},

	// Update transport data
	updateTransportData: function (payload) {
		var self = this;
		if (debug) { console.log("DEBUG: Data updated successfully (Times updated: " + this.timesUpdated + ")"); this.timesUpdated++; };

		// If test data JSON-file is used
		if (payload.testMode) {
			var obj = require("./" + payload.testJSON);
			for (i in obj) {
				obj[i].stop.stoptimesWithoutPatterns = this.temporalShift(obj[i].stop.stoptimesWithoutPatterns);
			}
			var stopTimesObj = self.tripFilters(obj.data.stop.stoptimesWithoutPatterns, payload.routeIdFilter, payload.timeToStop);
			self.sendSocketNotification("HSL_UPDATED", {
				stopName: obj.data.stop.name,
				code: obj.data.stop.code,
				stopGtfsId: obj.data.stop.gtfsId,
				stopRoutes: obj.data.stop.routes,
				stopTimes: stopTimesObj,
				firstLoad: false,
			});
		}
		// Use the new Digitransit API
		else {
			if (debug) { console.log("DEBUG: Update attempted using new Digitransit API"); };

			const query = `{
				stop(id: "${payload.stopId}") {
					gtfsId
					name
					code
					routes {
						shortName
						mode
					}
					stoptimesWithoutPatterns(
						startTime: ${Math.floor(Date.now() / 1000)}
						timeRange: ${payload.timeRange}
						numberOfDepartures: ${payload.maxFetchedDepartures}
					) {
						scheduledArrival
						realtimeArrival
						realtime
						serviceDay
						trip {
							tripHeadsign
							route {
								shortName
								mode
							}
							alerts {
								alertHeaderText
							}
						}
					}
				}
			}`;

			fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'digitransit-subscription-key': payload.apiKey
				},
				body: JSON.stringify({ query: query })
			})
				.then(response => {
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					return response.json();
				})
				.then(data => {
					if (debug) { console.log("DEBUG: Response received:", data); }

					if (!data.data || !data.data.stop) {
						throw new Error('Invalid response format from API');
					}

					const stopData = data.data.stop;
					const stopTimesObj = self.tripFilters(
						stopData.stoptimesWithoutPatterns,
						payload.routeIdFilter,
						payload.timeToStop
					);

					self.sendSocketNotification("HSL_UPDATED", {
						stopName: stopData.name,
						code: stopData.code,
						stopGtfsId: stopData.gtfsId,
						stopRoutes: stopData.routes,
						stopTimes: stopTimesObj,
						firstLoad: false,
					});
				})
				.catch(error => {
					console.error("Error fetching HSL data:", error);
					if (debug) { console.log("DEBUG: Error: " + error); }
				});
		}
	},

	// Run updateTransportData if command is passed from module
	socketNotificationReceived: function (notification, payload) {
		if (notification === 'GETDATA') {
			this.updateTransportData(payload);
		}
	}
});