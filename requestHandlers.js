function start(){
	console.log("Request handler 'start' was called.");

	function sleep(milliSeconds){              //set the func to make program waits
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + milliSeconds);
	}

	sleep(10000);         //waits for 10s
	return "Hello Start";       //让请求处理程序返回需要在浏览器中显示的信息
} 

function upload() {
	function sleep(milliSeconds){              //set the func to make program waits
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + milliSeconds);
	}

	sleep(10000);    
	console.log("Request handler 'upload' was called.");
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;