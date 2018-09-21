const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const staticMiddleware = express.static('./public');
const {db} = require('./models')
db.authenticate().
then(() => {
  console.log('connected to the database');
})

// const Page = db.define('page',{
//   title : Sequelize.STRING,
//   slug : Sequelize.STRING,
//   content: Sequelize.TEXT,
//   status: Sequelize.BOOLEAN
// })

// const User = db.define('user',{
//   name: Sequelize.STRING,
//   email: Sequelize.STRING
// })

app.use(morgan('dev'));
app.use(staticMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
console.log('Hello World');
app.get('/', (req, res) => {
  console.log('Hello World');
  res.send(`<h1> Hello World </h1>`);
})

async function synchronous (){
  // await Page.sync()
  // await User.sync()
  await db.sync({force: true})

  app.listen(3000, () => console.log(`example appl listening on port 3000`));

}
synchronous()
