export{};
const db = require('../db')

module.exports = (app) => {
  app.get('/api/questions/:id', (req, res, next) => {
    const values = [req.params.id]
    db.query('SELECT * FROM questions WHERE question_id = $1', values, (err, response) => {
      if (err) {
        return next(err)
      }
      res.send(response.rows[0])
    })
  })
}