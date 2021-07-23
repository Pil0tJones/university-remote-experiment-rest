export{};
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.Port;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
require('./routes/questions')(app)
require('./routes/screen-time')(app)
require('./routes/user')(app)
require('./routes/answers')(app)

module.exports = app