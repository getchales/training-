const p1 = require('./pattern1');
const p2 = require('./pattern2').getName;
const p3 = require('./pattern3');
const Person = require('./pattern4');
const p5 = require('./pattern5').getName;
const personObj4 = new Person();

p1();
p2();
p3.getName()
personObj4.getName()
p5();