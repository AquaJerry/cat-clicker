// (c) 2018 AquaJerry, Guangzhou University.
// Cat Clicker is freely distributed under the terms of ISC license.

const express = require('express');
const path = require('path');

// Locally run the website
express().use(express.static(path.resolve('dist'))).listen(8080);
