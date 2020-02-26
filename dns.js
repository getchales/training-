const dns = require("dns");
dns.lookup('bdu.edu.et', function (err, result) {
    console.log(result);
})