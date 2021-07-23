require('dotenv').config()
const { Pool } = require('pg')

console.log(process.env.RDS_HOSTNAME)

const pool = new Pool({
    user: process.env.RDS_USERNAME,
    host: process.env.RDS_HOSTNAME,
    database: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: 5432,
})
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}