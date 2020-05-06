var fs = require('fs');
var path = require('path');

console.log(path.resolve(__dirname, './nf/'))

var statInfo = fs.statSync(path.resolve(__dirname, './nf/'));
var fileInfo = fs.readdirSync(path.resolve(__dirname, './nf/'));
console.log(statInfo, statInfo.isDirectory(), fileInfo);

var arr = [1, 2, 3];

var [...arr2 ]= arr;

console.log(arr2);

console.log(arr.includes())

for(var i = 0; i <= 5; i++) {
	setTimeout(() => {
		console.log(i);
	}, 1000)
}