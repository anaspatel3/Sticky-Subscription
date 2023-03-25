const express = require('express')
const mongoose = require('mongoose')

const userDetailsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    contact: String,
    email: {type: String, unique: true},
    password: String
    },
    {
        collection: "userDetails",
    }
);
    
module.exports = mongoose.model("userDetails", userDetailsSchema);

