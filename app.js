const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const staticMiddleware = express.static('./public');


app.use(morgan('dev'));
app.use(staticMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
console.log('Hello World');
app.get('/', (req, res) => {
  console.log('Hello World');
  res.send(`<h1> Hello World </h1>`);
})


app.listen(3000, () => console.log(`example appl listening on port 3000`)
