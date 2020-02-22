const express = require('express');
const app1 = express();
const port = 3001;
app1.use(function (requist, response, next) {
    console.log((new Date).toString(), requist.method, requist.url);
    response.end(200);
    return next()
})
