function start(){
	console.log("Request handler 'start' was called.");
	return "Hello Start";       //让请求处理程序返回需要在浏览器中显示的信息
} 

function upload() {
	console.log("Request handler 'upload' was called.");
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;