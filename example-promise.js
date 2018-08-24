// function doWork (data, callback) {
// 	callback('done');
// }

// function doWorkPromise (data) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			reject('everything is broken!');
// 		}, 1000);
// 		/*reject({
// 			error: 'Something bad happened'
// 		}); */
// 	});
// }

// doWorkPromise('some data').then(function (data) {
// 	console.log(data);
// }, function (error) {
// 	console.log(error);
// });
var request = require('request');

function getWeather (location) {
	return new Promise(function (resolve, reject) {
	var encodedLocation = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?appid=9d61a4bec4371085266b8db860d5cb3a&q=Bronx&units=imperial';
	
	if (!location) {
		return reject('No location provided');
	}

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

getWeather('new york').then(function (currentWeather) {
	console.log(currentWeather);
}, function (error) {
	console.log(error);
});











