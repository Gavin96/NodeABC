var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

// function start(response, postData){      //将数据包含在对upload请求的响应中
function start(response){ 
	console.log("Request handler 'start' was called.");

	var body = '<html>' + 
	'<head>' + 
	'<meta http-equiv="Content-Type" content="text/html; '+
	'charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<form action="/upload" enctype="multipart/form-data" '+
	'method="post">'+
	// '<textarea name="text" rows="20" cols="60"></textarea>'+
	// '<input type="file" name="upload">'+
	'<input type="file" name="upload" multiple="multiple">'+
	'<input type="submit" value="Upload file" />'+
	'</form>'+
	'</body>'+
	'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

// function upload(response, postData) {
//   console.log("Request handler 'upload' was called.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("You've sent the text: "+
//   querystring.parse(postData).text);
//   response.end();
// }


function upload(response, request){
	console.log("Request handler 'upload' was called.");
	var form = new formidable.IncomingForm();
	console.log("About to parse");
	form.parse(request, function(error, fields, files){
		console.log("parsing done");
		fs.renameSync(files.upload.path, "c:/Users/wangga2/Desktop/crab.png");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("received image:<br/>");
		// console.log('/show');
		// response.write('/show');
		response.write("<img src='/show' />");
		response.end();
	});
}

// function show(response, postData){
// 	console.log("Request handler 'show' was called.");
// 	fs.readFile("crab.png", "binary", function(error, file){
// 		if(error) {
// 			response.writeHead(500, {"Content-Type": "text/plain"});
// 			response.write(error + "\n");
// 			response.end();
// 		} else {
// 			response.writeHead(200, {"Content-Type": "image/png"});
// 			response.write(file, "binary");
// 			response.end();
// 		}
// 	});
// }

function show(response){
	console.log("Request handler 'show' was called.");
	fs.readFile("c:/Users/wangga2/Desktop/crab.png", "binary", function(error, file){
		if(error) {
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(error + "\n");
			response.end();
		} else {
			response.writeHead(200, {"Content-Type": "image/png"});
			response.write(file, "binary");
			response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;