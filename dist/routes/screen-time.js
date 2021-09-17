"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require('../db');
module.exports = function (app) {
    app.post('/api/screen-state-change', function (req, res, next) {
        var values = [req.body.screenState, req.body.timestamp, req.body.user_id];
        console.log('values', values);
        db.query("\n            INSERT INTO screen_time(screen_change, timestamps ,user_id) \n            VALUES($1, $2, $3)\n        ", values, function (err, response) {
            if (err) {
                return next(err);
            }
            res.send(response);
        });
    });
};
