"use strict";
require('dotenv').config();
var Pool = require('pg').Pool;
var pool = new Pool({
    user: process.env.RDS_USERNAME,
    host: process.env.RDS_HOSTNAME,
    database: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
});
module.exports = {
    query: function (text, params, callback) {
        return pool.query(text, params, callback);
    },
};
