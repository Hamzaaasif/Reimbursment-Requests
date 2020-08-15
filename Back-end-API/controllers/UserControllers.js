const Pool = require('pg').Pool


const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'reimbursment',
  password: 'admin',
  port: 5432,
})

exports.getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


// exports.getUsers = (req , res )=>{
//   res.json({
//     posts:[
//       {tittle : ' First Post'},
//       {tittle : 'Second Post'}
//     ] 
//   });
// };
