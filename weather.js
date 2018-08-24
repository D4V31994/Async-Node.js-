var request = require('request');

module.exports = function (location) {
	return new Promise(function (resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?appid=9d61a4bec4371085266b8db860d5cb3a&q=Bronx&units=imperial';
	
		if (!location) {
			return new Promise(function (resolve, reject) {
			reject('No location provided');
	})
};

	request({
	url: url, 
	json: true
}, function(error, response, body) {
	if (error) {
		 reject('Unable to fetch weather.');
		} else {
		 resolve('It is ' + body.main.temp + ' in the ' +body.name + '!');
			}
		});
	});
}