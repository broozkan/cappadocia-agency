const express = require('express');
require('dotenv').config();

const app = express();

const categoryRouter = require('./Routes/Category')
const activityRouter = require('./Routes/Activity')
const fileRouter = require('./Routes/File')
const basketRouter = require('./Routes/Basket')
const reservationRouter = require('./Routes/Reservation')
const customerRouter = require('./Routes/Customer')
const userRouter = require('./Routes/User')

const cors = require('cors');

const mongoose = require('mongoose')
const bodyParser = require('body-parser');



/* connect to db */
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) throw err;
  console.log("Connected to db");
})
/* connect to db */


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cors middleware
var allowedOrigins = [
  'http://localhost:3000',
  'https://turkeyballoonscappadocia.com',
  'https://www.turkeyballoonscappadocia.com'
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));


app.use(express.static('/public'));

/* middlewares */
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})



/* routers */
app.use('/backend/category', categoryRouter);
app.use('/backend/activity', activityRouter);
app.use('/backend/file', fileRouter);
app.use('/backend/basket', basketRouter);
app.use('/backend/reservation', reservationRouter);
app.use('/backend/customer', customerRouter);
app.use('/backend/user', userRouter);






//comment
app.listen(process.env.PORT || 8000)