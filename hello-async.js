/* setTimeout(function () {
	console.log('1');
}, 2000);
// setTimeout === wait an amount of time b4 running function
setTimeout(function () {
	console.log('3');
}, 1000);
console.log('2');
*/

// Below is the challenge
// it prints 'Hello async!' in 2 seconds
console.log('Challenge');

function printInTwoSeconds (message) {
	setTimeout(function () {
		console.log(message)
	}, 2000);
}

printInTwoSeconds('Hello async!');