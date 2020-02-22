const fs = require('fs');
const path = require('path');
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('folder created');
// });

// fs.writeFile(path.join(__dirname, '/test', 'hello.js'),
//     'console.log("Hello")',
//     err => {
//         if (err) throw err;
//         console.log('file written');
//     });

// fs.appendFile(path.join(__dirname, '/test', 'hello.js'),
//     'console.log("I Love you")',
//     err => {
//         if (err) throw err;
//         console.log('append');
//     });
//read file
// fs.readFile(path.join(__dirname, '/test', 'hello.js'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//rename

fs.rename(path.join(__dirname, '/test', 'hello.js'), path.join(__dirname, '/test', 'hello.txt'), (err) => {
    if (err) throw err;
    console.log('file renamed');
});


