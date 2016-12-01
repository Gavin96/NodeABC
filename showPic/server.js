var http = require("http");   //使用require指令来载入nodejs自带的http模块，并将实例化的HTTP赋值给http变量
var url = require("url");

function start(route, handle){
	function onRequest(request, response){
		// var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		// request.setEncoding("utf-8");   //设置接收数据的编码格式为UTF-8

		// request.addListener("data", function(postDataChunk){       //注册"data"时间监听器
		// 	postData += postDataChunk;
		// 	console.log("Received POST data chunk '"+ postDataChunk + "'.");
		// });

		// request.addListener("end", function(){
		// 	route(handle, pathname, response, postData);
		// });
		route(handle, pathname, response, request);
	}

	http.createServer(onRequest).listen(8888);
	//调用http模块提供的函数:createServer,返回一个具有listen方法的对象,这个方法有一个数值参数,指定这个HTTP服务器监听的端口号.
	//函数通过request，response参数来接收和响应数据
	console.log("Server has started.");
}

exports.start = start; 