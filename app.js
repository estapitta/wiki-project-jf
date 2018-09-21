const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const staticMiddleware = express.static('./public');
const { db } = require('./models')
const routerWiki = require('./routes/wiki');
const routerUser = require('./routes/user');
db.authenticate().
  then(() => {
    console.log('connected to the database');
  })
app.use(morgan('dev'));
app.use(staticMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`<h1>or maybe it is??</h1>`);

})
app.use('/wiki', routerWiki);
app.use('/user', routerUser);

async function synchronous() {
  // await Page.sync()
  // await User.sync()
  await db.sync({ force: true })

  app.listen(3000, () => console.log(`example appl listening on port 3000`));

}
synchronous()
