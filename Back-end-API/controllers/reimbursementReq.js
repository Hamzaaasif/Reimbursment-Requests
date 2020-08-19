const Pool = require('pg').Pool

const pool = new Pool({
  user: 'Admin',
  host: 'localhost',
  database: 'reimbursment',
  password: 'admin',
  port: 3307,
})

exports.getRequests = (request, response) => {
    pool.query('SELECT * FROM requests ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

exports.getRequestsById = (request, response) => {
    const employeeid = request.params.id

    pool.query('SELECT * FROM requests WHERE employeeid = $1', [employeeid], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

exports.postRequests = (request, response) => {
    
    const { 
        employeeid,
        reasons,
        comment,
        money,
        status,
    } = request.body

    var date = new Date()
    month = date.getMonth()+1
    date = date.getDate() + "-" + month + "-" + date.getFullYear()

    pool.query('INSERT INTO requests (employeeid, reasons, comment, money, status, date) VALUES ($1,$2,$3,$4,$5,$6)', 
    [employeeid, reasons, comment, money, status, date], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Your request send successfully`)
    })
}

exports.updateRequests = (request, response) => {
    const employeeid = request.params.id
    const { 
        reasons,
        comment,
        money,
        status,
        date
    } = request.body
  
    pool.query(
      'UPDATE requests SET reasons = $1, comment = $2, money = $3, status = $4, date = $5 WHERE employeeid = $6',
      [reasons, comment, money, status, date, employeeid],
      (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('Request updated successfully')
      }
    )
  }

exports.deleteRequests = (request, response) => {
    const employeeid = request.params.id
  
    pool.query('DELETE FROM requests WHERE employeeid = $1', [employeeid], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Requests deleted successfully`)
    })
  }