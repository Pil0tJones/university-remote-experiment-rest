"use strict";
var db = require('../db');
var app = require('../app');
module.exports = function (app) {
    app.post('/api/user/create-user', function (req, res, next) {
        var values = [req.body.id, req.body.gender, req.body.age];
        db.query("INSERT INTO users(id, gender, age) VALUES($1, $2, $3)", values, function (err, response) {
            if (err) {
                return next(err);
            }
            res.send(response);
        });
    });
    app.get('/user-by-id/:id', function (req, res, next) {
        db.query('SELECT * FROM users WHERE id = $1', [req.params.id], function (err, response) {
            if (err) {
                return next(err);
            }
            res.send(response.rows[0]);
        });
    });
};
