const Pool = require('pg').Pool

var reqt

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'reimbursment',
  password: 'admin',
  port: 5432,
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

//for update requests
exports.updateRequests = (request, response) => {
    const { 
        id,
        reasons,
        comment,
        money,
    } = request.body

    var date = new Date()
    month = date.getMonth()+1
    date = date.getDate() + "-" + month + "-" + date.getFullYear()

    pool.query(
      'UPDATE requests SET reasons = $1, comment = $2, money = $3, date = $4 WHERE id = $5 AND status = $6',
      [reasons, comment, money, date, id, 'Pending'],
      (error, results) => {
        if (error) {
            throw error
        }
        if(results.rowCount === 0){
          response.status(400).json({error :'You cannot Update this Request .. '})
        }
        else{
          response.status(200).json({result: 'Request Updated ...'})
        }
      }
    )
  }

//for deleting requests by id
exports.deleteRequests = (request, response) => {
    const id = request.params.id
  
    pool.query('DELETE FROM requests WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Requests deleted successfully`)
    })
  }


  
  //Update Staus for manager
  exports.updateStatus = (request, response) => {
    const { 
        status,
        id
    } = request.body
    
    pool.query(
      'UPDATE requests SET status = $1 WHERE id=$2',
      [status , id],
      (error, results) => {
        if (error) {
            throw error
        }
        if(results.rowCount === 0){
          response.status(400).send('Unable to Update Status ...')
        }
        else{
          response.status(200).send('Status Changed...')
        }
      }
    )
  }
