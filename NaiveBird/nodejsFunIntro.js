function say(word) {
	console.log(word);
}

function execute(someFunction, value) {
	someFunction(value);
}

execute(say, "Hello");

// 匿名函数
function execute1(someFunction, value) { 
	someFunction(value);
}

//直接将函数的定义写在作为参数的位置，则不用给被作为参数传递的函数起名字，所以叫做匿名函数
execute1(function(word) { console.log(word) }, "Hi");

console.log( __filename );
console.log( __dirname );

console.log("Current Directory： " + process.cwd());
console.log("Current Version： " + process.version);
// 输出内存使用情况
console.log(process.memoryUsage());