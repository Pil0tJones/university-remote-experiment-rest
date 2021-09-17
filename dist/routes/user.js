"use strict";
var db = require('../db');
var app = require('../app');
module.exports = function (app) {
    app.get('/api/user/last-entry', function (req, res, next) {
        db.query('SELECT belongs_to FROM users ORDER BY created_at DESC LIMIT 1', function (err, response) {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.send(response.rows[0]);
        });
    });
    app.post('/api/user/create-user', function (req, res, next) {
        var values = [req.body.id, req.body.gender, req.body.age, req.body.belongs_to];
        console.log('values', values);
        db.query("INSERT INTO users(id, gender, age, belongs_to) VALUES($1, $2, $3, $4)", values, function (err, response) {
            if (err) {
                return next(err);
            }
            res.send(response);
        });
    });
};
