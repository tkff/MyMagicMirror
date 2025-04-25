/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: [ "127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.1.1/24", "::ffff:192.168.1.1/24" ],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "fi",
	locale: "fi-fi",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
    			"module": "MMM-Admin-Interface"
    		},
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Helsinki",
				locationID: "658226", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "c24f1e58b3caff01f162ceaea49bb68c"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Helsinki",
				locationID: "658226", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "c24f1e58b3caff01f162ceaea49bb68c"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "YLE",
						url: "https://feeds.yle.fi/uutiset/v1/majorHeadlines/YLE_UUTISET.rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			 module: "MMM-RAIN-MAP",
			 position: "top_right",
			 config: {
 				 animationSpeedMs: 400,
 				 colorScheme: 2,
 				 colorizeTime: true,
 				 defaultZoomLevel: 8,
 				 displayTime: true,
 				 displayTimeline: true,
				 displayClockSymbol: false,
  				 displayHoursBeforeRain: -1,
  				 extraDelayLastFrameMs: 1000,
				 extraDelayCurrentFrameMs: 3000,
  				 invertColors: false,
 				 markers: [

 					 { lat: 60.219812992380504, lng: 24.851702027331193, color: "red" },
  				],
  				mapPositions: [
  					{ lat: 60.16, lng: 24.93, zoom: 9, loops: 1 },
  				],
  				mapUrl: "https://a.tile.openstreetmap.de/{z}/{x}/{y}.png",
  				mapHeight: "320px", // must be a pixel value (no percent)
 				mapWidth: "320px", // must be a pixel value (no percent)
  				maxHistoryFrames: -1,
  				maxForecastFrames: -1,
  				substitudeModules: [],
  				updateIntervalInSeconds: 300,
			 }
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
