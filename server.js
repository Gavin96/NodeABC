var http = require("http");      //请求Node.js自带的http模块，并将其赋值给http变量
var url = require("url");

function start(route,handle){ //add the parameter route and handle 
	function onRequest(request, response){       //createServer函数会返回一个对象
		// console.log("Request received");
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		// route(handle,pathname);      //将路由函数作为参数传递过去

		response.writeHead(200, {"Content-Type": "text/plain"});
		var content = route(handle, pathname);
		// response.write("Hi World ~");
		response.write(content);          // reconstitute to enable responding to browser according to returned content of routers
		response.end();
	// console.log("Request received");
    }

    http.createServer(onRequest).listen(8888);   //对象具有listen的方法，其中的数值参数指定HTTP服务器监听的端口号
    console.log("Server has started.");
}

exports.start = start;