var exec = require("child_process").exec;

// function sleep(milliSeconds){              //set the func to make program waits
// 	var startTime = new Date().getTime();
// 	while(new Date().getTime() < startTime + milliSeconds);
// }

function start(response){
	console.log("Request handler 'start' was called.");	

	// sleep(10000);         //waits for 10s
	exec("ls -lah", function(error, stdout, stderr){
		response.writeHead(200, {"Conten-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
	return "Hello Start";       //让请求处理程序返回需要在浏览器中显示的信息
} 

function upload(response) {	
	console.log("Request handler 'upload' was called.");

	// sleep(10000);    
	response.writeHead(200, {"Conten-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
	// return "Hello Upload";
}

exports.start = start;
exports.upload = upload;