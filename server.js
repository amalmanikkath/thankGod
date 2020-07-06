var express = require('express');
var router = express.Router();
var app = require('./app');
var http = require('http');
var server = app.listen(3000, function () {
    console.log('app is listening on ['+ process.env.PORT + ']');
});
