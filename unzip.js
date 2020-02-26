const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const unzip = zlib.createGunzip();

const readable = fs.createReadStream(__dirname + '/source.txt');
const compressed = fs.createWriteStream(__dirname + '/destination.txt.gz');
readable.pipe(gzip).pipe(compressed);

// compressed.on('close', function () {

setTimeout(() => {
    const x = fs.createReadStream(__dirname + '/destination.txt.gz');
    const y = fs.createWriteStream(__dirname + '/destination.txt');
    x.pipe(unzip).pipe(y);
}, 10);

// })

