var fs = require('fs');

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