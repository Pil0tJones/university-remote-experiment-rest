export {};
const db = require('../db')
const app = require('../app')

module.exports = (app) => {
  app.post('/api/answer', (req, res, next) => {
    const values = [req.body.user_id, JSON.stringify(req.body.answers)];
    db.query(`
      INSERT INTO answers(user_id, answers) 
      VALUES($1, $2)
      ON CONFLICT (user_id)
      DO
        UPDATE Set answers = EXCLUDED.answers;`, values, (err, response) => {
      if (err) {
        return next(err)
      }
      res.send(response)
    })
  })

}