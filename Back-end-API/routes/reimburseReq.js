const express = require('express')
const router = express.Router()

const {
    getRequests,
    getRequestsById,
    postRequests,
    updateRequests,
    deleteRequests

} = require('../controllers/reimbursementReq')

router.get('/getreq',getRequests)
router.get('/getreqbyid/:id',getRequestsById)
router.post('/postreq',postRequests)
router.put('/updatereq/:id',updateRequests)
router.delete('/deletereq/:id',deleteRequests)

module.exports = router;