const Pool = require('pg').Pool
const jwt = require('jsonwebtoken');
require('dotenv').config();
const expressjwt = require('express-jwt');
// const uuidv1 = require('uuid/v1');
// const crypto = require('crypto')


//db connections
const pool = new Pool({
user: "Admin",
host: 'localhost',
database: 'reimbursment',
password: "admin",
port: 3307,
})


exports.getUsers = (req , res )=>{

  pool.query('SELECT *FROM public.users;',(err , result)=>{
    if(err)
    {
      throw err;
    }
    else
    {
      console.log("Data base connected...")
      res.status(200).json(result.rows)
    }
  })
};





// Signup
exports.signup = async (req, res) =>{
    
  // Check if user exist by employeeid

  let employeeid = req.body.employeeid
  dbquery = `SELECT * FROM public.users WHERE employeeid = $1;`;
  pool.query(dbquery, [employeeid], (err, result)=> {
      if (err) throw err;
      else if(result.rowCount == 0){
          // if not exist then insert
        
          const {
              fname,
              lname ,
              userrole,
              password,
              employeeid
          } = req.body
   
          let dbquery = `INSERT INTO users (fname, lname, password, userrole, employeeid) VALUES ($1 , $2 , $3 , $4 , $5);`;
          pool.query(dbquery , [fname,lname,password,userrole,employeeid] , (err,result) => {

              if(err){
                  return res.status(400).json({
                      error : err 
                  });
              }
              else{
                  res.status(200).json({
                      message: "User Added Successfully !! Please login"
                  });
              }
          });
      }
      else{

        res.status(400).json({
          error: "Employee Id is already taken"
        });
          
      }
  })
}



//signin method

exports.signin = (req, res) => {
  // Find the user based on email
  const { employeeid, password } = req.body
  console.log("check", employeeid, password)
  dbquery = `SELECT * FROM users WHERE employeeid = $1`;
  pool.query(dbquery, [employeeid], (err, result)=> {
      // if error or no user
      if (err || result.rowCount == 0){
          return res.status(401).json({
              error: "Sorry!! We can't find your id contact me manager."
          })
      }

      const fname = result.rows[0].fname 
      const lname = result.rows[0].lname 
      const employeeid = result.rows[0].employeeid
      const userrole = result.rows[0].userrole
      
      // if user, authenticate
      if(password != result.rows[0].password ){
          return res.status(401).json({
              error: "You entered a wrong password please try again."
          })
      }

      // generate a token with user id and secret
      const token = jwt.sign({Employeeid : employeeid}, process.env.JWT_SECRET);
      // persists the token in cookie
      res.cookie("t", token, {expire:new Date()+9999})
      // return response with user and token to frontend client
      return res.json({token, user: {fname , lname , employeeid ,userrole}})
  })
  
}

// Signout
exports.signout = (req, res) =>{
  res.clearCookie("t")
  return res.json({message: "Signout success"})
}


exports.requireSignin = expressjwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
  algorithms: ['RS256']
})

