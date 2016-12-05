var buf = new Buffer(10);

var buf1 = new Buffer([10,20,30,40,50]);

var buf2 = new Buffer("www.naivebird.com","utf-8");

var buf3 = new Buffer(256);
len = buf3.write("www.runoob.com");

console.log("The num of characters written into is " + len + ".");
console.log('\n');

buf4 = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
	buf4[i] = i + 97;
}
// 从缓冲区读数据
console.log( buf4.toString('ascii'));
console.log( buf4.toString('ascii',0,5));
console.log( buf4.toString('utf8',0,5));
console.log( buf4.toString(undefined,0,5));


console.log('\n');

var buf5 = new Buffer('www.taobao.com');
var json = buf5.toJSON();
// var json = buf5.toJSON(buf5);

console.log(json);

console.log("\n");

// 缓冲区合并
var buffer1 = new Buffer("Ruanyuan Wangzhi: ");
var buffer2 = new Buffer("www.sse.tj.com");
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3's content is '" + buffer3.toString() + "'");
console.log("\n");

// 比较buffer
var buffer4 = new Buffer("1234");
var buffer5 = new Buffer("123");
var result = buffer4.compare(buffer5);

if ( result < 0 ) {
	console.log(buffer4 + " is in front of " + buffer5);
}else if ( result == 0 ) {
	console.log("buffer4 '" + buffer4 + "' is equal to" + " buffer5 '" + buffer5 + " '.");
}else {
	console.log("buffer4 '" + buffer4 + "' is after " + "buffer5 ' " + buffer5 +" '.");
}
console.log("\n");

// 拷贝缓冲区
 var buf11 = new Buffer("ABCde");
 var buf12 = new Buffer("222211");
 buf11.copy(buf12);  // 将buf11拷贝进入buf12中，从buf12的首字母开始替换（起始位置可自定义）
 console.log("buf12's content is: " + buf12.toString());
 console.log("\n");

 // 缓冲区裁剪
console.log("The length of buf2 is " + buf2.length);
 var buf21 = buf2.slice(0,5); // 从第0号字符开始，到第5个字符结束

console.log("Clip buf2, buf21's content is: " + buf21);