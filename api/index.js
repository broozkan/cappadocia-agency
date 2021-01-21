const express = require('express');
require('dotenv').config();

const app = express();

const categoryRouter = require('./Routes/Category')

const cors = require('cors');

const mongoose = require('mongoose')
const bodyParser = require('body-parser');



/* connect to db */
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true } ,(err)=>{
  if(err) throw err;
  console.log("Connected to db");
})
/* connect to db */


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cors middleware
app.use(cors());

app.use(express.static('/public'));

/* middlewares */
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', )
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})



/* routers */
app.use('/category', categoryRouter);






//comment
app.listen(process.env.PORT || 8000)