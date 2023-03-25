const Subscription = require('../models/subsDetails')
const userDet = require('../server')
const mongoose = require('mongoose');



//get all subscriptions
const getSubs = async(req, res) => {
    const subs = await Subscription.find({}).sort({dat: -1})

    res.status(200).json(subs)
}

//get a subscription
const getSub = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such Subscription"})
    }
    const sub = await Subscription.findById(id)

    if(!sub){
        return res.status(404).json({error: "No Subscription found" })
    }
    res.status(200).json(sub)
}



//create a subscription
const createSubs = async(req, res) =>{
    const { email, name, type, genre, amount, dat} = req.body

    //add data to MongoDB
    try {
        const subs = await Subscription.create({email, name, type, genre, amount, dat})
        res.status(200).json(subs)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a subscription
const deleteSub = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such Subscription"})
    }

    const sub = await Subscription.findByIdAndDelete({_id: id})

    if(!sub){
        return res.status(404).json({error: "No Subscription found" })
    }
    res.status(200).json(sub)
}

//update a subscription
const updateSub = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such Subscription"})
    }

    const sub = await Subscription.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if(!sub){
        return res.status(404).json({error: "No Subscription found" })
    }
    res.status(200).json(sub)

}

module.exports = {
    getSubs,
    createSubs,
    getSub,
    deleteSub,
    updateSub,
 
}