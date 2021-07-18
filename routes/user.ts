const db = require('../db')
const app = require('../app')

module.exports = (app) => {
  app.post('/api/user/create-user', (req, res, next) => {
    const values = [req.body.id, req.body.gender, req.body.age]
    db.query(`INSERT INTO users(id, gender, age) VALUES($1, $2, $3)`, values, (err, response) => {
      if (err) {
        return next(err)
      }
      res.send(response)
    })
  })
  app.get('/user-by-id/:id', (req, res, next) => {
    db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, response) => {
      if (err) {
        return next(err)
      }
      res.send(response.rows[0])
    })
  })
}
