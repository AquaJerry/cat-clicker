// (c) 2018 LiuZeyang, Guangzhou University.
// Cat Clicker Server is freely distributed under the terms of ISC license.

const fs = require('fs');
const http = require('http');
const path = require('path');

// Locally run the website.
fs.readFile(path.resolve('dist/index.html'), (err, html) => {
    if (err) {
        throw err;
    }
    http.createServer((req, res) => {
        res.writeHeader(200, {
            'content-Type': 'text/html',
        });
        res.write(html);
        res.end();
    }).listen(8080);
    console.log('Running at http://localhost:8080');
    console.log('Ctrl+C to exit.');
});
