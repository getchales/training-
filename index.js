const Loger = require('./loger');
const loger = new Loger();

loger.on('message', data => console.log('Called Listener', data));
loger.log("Hello World");