"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require('../db');
module.exports = function (app) {
    app.get('/api/questions/:id', function (req, res, next) {
        var values = [req.params.id];
        db.query('SELECT * FROM questions WHERE question_id = $1', values, function (err, response) {
            if (err) {
                return next(err);
            }
            res.send(response.rows[0]);
        });
    });
};
