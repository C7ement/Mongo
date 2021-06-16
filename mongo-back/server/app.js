const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const logger = require('morgan');

const options = {
  useNewUrlParser: true,
  reconnectTries: 60,
  reconnectInterval: 1000
}

const app = express();
// Log requests to the console.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//DEV ONLY
console.log("process.env.NODE_ENV");
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV==="development") {
  console.log("process.env.NODE_ENV===\"development\"");
  const cors = require('cors');
  app.use(cors({
    origin: 'http://localhost:8080',
  }));
}

require('./routes')(app);

app.get('*',
    (req, res) => res.status(200).send({
      message: 'Welcome to the beginning of nothingness.',
    }));
console.log("HEEEEERE")

MongoClient.connect(process.env.DATABASE_URL, options, (err, database) => {
  if (err) {
    console.log(`FATAL MONGODB CONNECTION ERROR: ${err}:${err.stack}`)
    process.exit(1)
  }
  app.locals.db = database.db('app');

})

module.exports = app;