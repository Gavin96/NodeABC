function route(handle, pathname, response,postData){
	console.log("About to route a request for " + pathname);
	if(typeof handle[pathname] === 'function'){
		// return handle[pathname]();              //路由
		handle[pathname](response, postData);      //将postData传递给请求处理程序
	} else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not Found");
		response.end();
		// return "404 Not Found";
	}
}

exports.route = route;