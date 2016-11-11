var http = require("http");
var url = require("url");

function start(route, handle){
	function onRequest(request, response){
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		request.setEncoding("utf-8");   //设置接收数据的编码格式为UTF-8

		request.addListener("data", function(postDataChunk){       //注册"data"时间监听器
			postData += postDataChunk;
			console.log("Received POST data chunk '"+ postDataChunk + "'.");
		});

		request.addListener("end", function(){
			route(handle, pathname, response. postData);
		});
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;