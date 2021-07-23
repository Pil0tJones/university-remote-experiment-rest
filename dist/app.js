"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.Port;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.set('port', port);
var server = http.createServer(app);
server.listen(port, function () {
    console.log("App running on port " + port + ".");
});
require('./routes/questions')(app);
require('./routes/screen-time')(app);
require('./routes/user')(app);
require('./routes/answers')(app);
module.exports = app;
