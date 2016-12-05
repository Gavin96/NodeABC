var events = require('events');

var eventEmitter = new events.EventEmitter();

// eventEmitter.emit('error');

// 监听器 #1
var listener1 = function listener1() {
	console.log('Monitor listener1 executes.');
}

// 监听器 #2
var listener2 = function listener2() {
	console.log('Monitor listener2 executes.')
}

// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection1', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection1');
console.log('There are ' + eventListeners + ' monitors are monitoring conncetionEvents');

// 处理 connection 事件
eventEmitter.emit('connection1');

// 移除已经被监听的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log('listener1 will not be monitored anymore.');

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log('There are ' + eventListeners + ' monitors are monitoring conncetionEvents');

console.log('pro executes over.') 