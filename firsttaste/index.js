// the path for value transporting among layers is [请求处理程序--->请求路由--->服务器]
var server = require("./server");
var router = require("./router");     //使得路由函数可以被注入到服务器中
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route,handle);