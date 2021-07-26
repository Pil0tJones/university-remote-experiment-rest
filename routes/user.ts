const db = require('../db')
const app = require('../app')

module.exports = (app) => {

  app.get('/api/user/last-entry', (req, res, next) => {
    console.log('HERE')
    db.query('SELECT belongs_to FROM users ORDER BY created_at DESC LIMIT 1', (err, response) => {
      if (err) {
        console.log(err)
        return next(err)
      }
      res.send(response.rows[0])
    })
  })

  app.post('/api/user/create-user', (req, res, next) => {
    const values = [req.body.id, req.body.gender, req.body.age, req.body.belongs_to]
    db.query(`INSERT INTO users(id, gender, age, belongs_to) VALUES($1, $2, $3, $4)`, values, (err, response) => {
      if (err) {
        return next(err)
      }
      res.send(response)
    })
  })



}
