const express = require( 'express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')


//routes files
const Users = require('../Back-end-API/routes/users')


//middlewares
app.use(bodyParser.json())
app.use(morgan("dev"));

//routes
app.use("/",Users);



//app listen on port
app.listen(8080 , ()=>{
  console.log(`node is listening on port : http://localhost:8080 `);
});