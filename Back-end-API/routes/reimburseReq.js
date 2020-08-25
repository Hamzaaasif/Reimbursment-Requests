const express = require('express')
const router = express.Router()

const {
    getRequests,
    getRequestsById,
    postRequests,
    updateRequests,
    deleteRequests

} = require('../controllers/reimbursementReq')

const {requestValidator} = require('../validators/validators')

router.get('/getreq',getRequests)
router.get('/getreqbyid/:id',getRequestsById)
router.post('/postreq',requestValidator , postRequests)
router.put('/updatereq/:id',requestValidator ,updateRequests)
router.delete('/deletereq/:id',deleteRequests)

module.exports = router;