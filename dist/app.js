"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.listen(port, function () {
    console.log("App running on port " + port + ".");
});
require('./routes/questions')(app);
require('./routes/screen-time')(app);
require('./routes/user')(app);
require('./routes/answers')(app);
module.exports = app;
