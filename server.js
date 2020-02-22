const http = require('http');

const students = [
    { name: 'Getaneh Tafere', age: 30 },
    { name: 'Mahider Tiruneh', age: 25 },
    { name: 'Bikale ', age: 27 },
    { name: 'Dawit Alesew', age: 9 },
    { name: 'Degitu  Alesew', age: 28 }
];
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'applicaton/json')
    res.end(
        JSON.stringify({
            success: true,
            data: students
        })
    )
}).listen(5000, () => console.log('server running'));