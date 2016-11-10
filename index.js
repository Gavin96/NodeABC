
var server = require("./server");
var router = require("./router");     //使得路由函数可以被注入到服务器中

server.start(router.route);