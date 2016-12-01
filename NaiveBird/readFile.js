// 此程序是为非阻塞式工作
var fs = require("fs");

fs.readFile("input.txt", function (err, data) {
	if (err) {
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log("pro excute over");