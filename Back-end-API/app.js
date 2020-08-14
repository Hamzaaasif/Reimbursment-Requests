const express = require( 'express')
const app = express()
const morgan = require('morgan')

//routes files
const Users = require('../Back-end-API/routes/users')


//middlewares
app.use(morgan("dev"));

//routes
app.use("/",Users);



//app listen on port
app.listen(8080 , ()=>{
  console.log(`node is listening on port : http://localhost:8080 `);
});