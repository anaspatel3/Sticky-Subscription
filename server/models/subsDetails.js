const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const subscriptionSchema = new Schema({
    email:{
        type: String
    },
    
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    dat:{
        type: String,
        required: true
    }
    
},
    {
        collection: "subscription",
    }
);
    
module.exports = mongoose.model("subscription", subscriptionSchema);


