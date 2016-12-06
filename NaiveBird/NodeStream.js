var fs = require ("fs");
var data = '';

// new the readerStream
var readerStream = fs.createReadStream("input.txt");

// set Encode as 'utf8'
readerStream.setEncoding('UTF8');

// deal stream case --> data, end, and error
readerStream.on('data', function(chunk) {
	data += chunk;
});

readerStream.on('end', function() {
	console.log(data);
});

readerStream.on('error', function(err) {
	console.log(err.stack);
});

console.log("Pro1 executes over");

console.log("\n");

var fs2 = require("fs");
var data2 = 'sse tj is at 12306.com';

// new a stream writable, write into file output.txt
var writerStream = fs2.createWriteStream('output.txt');

// use utf8 encoding to write data
writerStream.write(data2, 'UTF8');

// mark the tail of file
writerStream.end();

//deal with stream cases -->data, end, and error
writerStream.on('finish', function() {
	console.log("write over.");
});

writerStream.on('error', function(err) {
	console.log(err.stack);
});

console.log("Pro2 executes over.");
