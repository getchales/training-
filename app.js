const express = require('express');
const app1 = express();
const port = 3001;

app1.get("*", function (require, response) {
    response.status(200);
    response.set('Content-Type', 'text/html');
    response.send('Hello world');
    response.end();
});

app1.listen(port, function () {
    console.log("The server is running")
})
