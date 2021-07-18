export { };
const db = require('../db')

module.exports = (app) => {
    app.post('/api/screen-state-change', (req, res, next) => {
        const values = [req.body.screenState, req.body.timestamp, req.body.user_id]
        db.query(`
      INSERT INTO screen_time(screen_change, timestamp ,user_id) 
      VALUES($1, $2, $3)
      `, values, (err, response) => {
            if (err) {
                return next(err)
            }
            res.send(response)
        })
    })
}