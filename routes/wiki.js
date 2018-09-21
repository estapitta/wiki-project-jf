const express = require('express');
const routerWiki = express.Router();
const addPageHtml = require('../views/addPage');
const { Page } = require("../models/index");
const { addPage } = require("../views/addPage");

routerWiki.get('/', (req, res) => {
  res.redirect('/');
})
// routerWiki.post('/', (req, res) => {
//   console.log(`<h1>descriptive tag </h1>`);
//   res.send(addPageHtml());
// });
routerWiki.get('/add', (req, res) => {

  res.send(addPageHtml());
})

routerWiki.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  let tit = req.body.title;
  let cont = req.body.textarea;
  const page = new Page({
    title: tit,
    content: cont
  });
  console.log('this is my page', page);

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});


module.exports = routerWiki;
