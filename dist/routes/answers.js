"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require('../db');
var app = require('../app');
module.exports = function (app) {
    app.post('/api/answer', function (req, res, next) {
        var values = [req.body.user_id, JSON.stringify(req.body.answers)];
        console.log(values);
        db.query("\n      INSERT INTO answers(user_id, answers) \n      VALUES($1, $2)\n      ON CONFLICT (user_id)\n      DO\n        UPDATE Set answers = EXCLUDED.answers;", values, function (err, response) {
            if (err) {
                return next(err);
            }
            res.send(response);
        });
    });
};
