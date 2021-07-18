"use strict";
require('dotenv').config();
var Pool = require('pg').Pool;
var pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB,
    database: process.env.DB_USER,
    password: process.env.PASSWORD,
    port: 5432,
});
module.exports = {
    query: function (text, params, callback) {
        return pool.query(text, params, callback);
    },
};
