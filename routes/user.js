const express = require('express');
const routerUser = express.Router();

routerUser.get('/', (req, res) => {
  console.log(`<h1>descriptive tag </h1>`);
  res.send(`<h1>or maybe it is??</h1>`);
})
routerUser.post('/', (req, res) => {
  console.log(`<h1>descriptive tag </h1>`);
  res.send(`<h1>or maybe it is??</h1>`);
})
routerUser.get('/add', (req, res) => {
  console.log(`<h1>descriptive tag </h1>`);
  res.send(`<h1>or maybe it is??</h1>`);
})
module.exports = routerUser;
