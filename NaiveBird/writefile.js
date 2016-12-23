var fs = require('fs');
// var compress = require("./compress.js");
var s = require('./sleep.js');

console.log("Ready to write in...");
fs.writeFile('writetest.txt','我是要写入的内容', function(err) {
	if (err){
		return console.error(err);
	}
	console.log('data wroten ok...');
	console.log('read written data...')
	fs.readFile('writetest.txt', function(err, data){
		if (err){
			return console.error(err);
		}
		console.log("asyn data read: " + data.toString());
	});
});
// fd 通过方法返回的文件描述符
fs.open('test1.txt','r+',function(err, fd){
	if (err) {
		return console.error(err);
	}
	console.log("file open ok.");
});


console.log('\n');
s.sleep(4000);
// compress.sleep(3000);
// 截取文件
var buf = new Buffer(1024);

fs.open('test2.txt','r+',function(err, fd) {
	if (err){
		return console.error(err);
	}
	console.log("file open ok.");
	console.log("get contents after 10th character.");

	fs.ftruncate(fd, 10, function(err){
		if (err){
			console.log(err);
		}
		console.log("file intercept right.");
		console.log("read the same file.");
		fs.read(fd, buf, 0, buf.length, 0, function(err,bytes){
			if (err) {
				console.log(err);
			}

			// layout read characters
			if (bytes > 0){
				console.log(buf.slice(0, bytes).toString());
			}

			// close file
			fs.close(fd, function(err){
				if (err) {
					console.log(err);
				}
				console.log("file close ok.");
			});
		});
	});
});