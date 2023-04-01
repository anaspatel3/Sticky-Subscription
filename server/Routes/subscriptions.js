const express = require('express')

const {
    getSub1,
    getSubs,
    createSubs,
    getSub,
    deleteSub,
    updateSub,
    
} = require('../controllers/subsController')

const router = express.Router()
//Get all Subscriptions
router.get('/', getSubs)


//Get a Subscriptions
router.get('/:id', getSub)

//Create a Subscription
router.post('/', createSubs)

//Delete a Subscription
router.delete('/:id', deleteSub)

//Update a Subscription
router.patch('/:id', updateSub)


module.exports = router