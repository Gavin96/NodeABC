function sleep(numberMillis) {
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while (true) {
		now = new Date();
		if(now.getTime() > exitTime)
		return;
	}
}

var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("input.txt")
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream("input.txt.gz"));

console.log("Compressing is over.");

console.log("let's sleep for 3s.")
sleep(3000);

console.log("let's executes the decompress op.");
sleep(1000);
var fs2 = require("fs");
var zlib2 = require("zlib");

fs2.createReadStream("input3.txt.gz")
	.pipe(zlib2.createGunzip())
	.pipe(fs2.createWriteStream("input3.txt"));

console.log("Decompressing done.");