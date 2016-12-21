var fs = require("fs");

console.log('Ready to open the file...');
fs.open('input.txt','r+',function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.log('File open successfully.')
});
// asynchronous 异步的方法函数最后一个参数为回调函数,回调函数的第一个参数包含了错误信息(error)
fs.readFile('input.txt', function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log("Asynch read: " + data.toString());
});


// sync
var data = fs.readFileSync('input.txt');
console.log("Sync read: " + data.toString());

fs.stat('F:/GitUse/NodeABC/NaiveBird/nodeBuffer.js', function(err, stats) {
	// console.log(stats.isFile());
	console.log(stats);
	var status = stats.isFile();
	console.log('Is file or not ?  :' + status);
});


