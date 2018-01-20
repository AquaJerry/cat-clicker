// (c) 2018 LiuZeyang, Guangzhou University.
// Cat Clicker Server is freely distributed under the terms of ISC license.

const express = require('express');
const path = require('path');

// Locally run the website.
express().use(express.static(path.resolve('dist'))).listen(8080);

console.log('Running at http://localhost:8080');
console.log('Ctrl+C to exit.');
