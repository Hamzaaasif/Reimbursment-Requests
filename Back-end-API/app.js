const express = require( 'express')
const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

const expressvalidator = require('express-validator');

const cors = require('cors')

//routes files
const Users = require('./routes/users')
const reimburseReq = require('./routes/reimburseReq')

//middlewares
app.use(bodyParser.json())
app.use(morgan("dev"));
app.use(bodyParser.json())
app.use(cors());
app.use(cookieParser());
app.use(expressvalidator())
app.use(cors())

//routes
app.use("/", Users);
app.use("/", reimburseReq);



//app listen on port
app.listen(8080 , ()=>{
  console.log(`node is listening on port : http://localhost:8080 `);
});