export{};
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
require('./routes/questions')(app)
require('./routes/screen-time')(app)
require('./routes/user')(app)
require('./routes/answers')(app)

module.exports = app