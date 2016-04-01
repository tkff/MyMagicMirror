/* Magic Mirror
 * NewsFetcher
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var FeedMe = require('feedme');
var request = require('request'); 

var NewsFetcher = function() {
	var self = this;

	self.successCallback = function(){};
	self.errorCallback = function(){};

	self.items = [];

	var parser = new FeedMe();

	parser.on('item', function(item) {
		//console.log(item);
		self.items.push({
			title: item.title,
			pubdate: item.pubdate,
		});
	});

	parser.on('end', function(item) {
		self.successCallback(self.items);
	});

	parser.on('error', function(error) {
		self.errorCallback(error);
	});

	/* public methods */

	/* fetchNews()
	 * Fetch the new news items.
	 *
	 * attribute url string - The url to fetch.
	 * attribute success function(items) - Callback on succes. 
	 * attribute error function(error) - Callback on error. 
	 */
	self.fetchNews = function(url, success, error) {
		self.successCallback = success;
		self.errorCallback = error;
		request(url).pipe(parser);
	};
};

module.exports = NewsFetcher;