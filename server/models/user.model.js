const mongoose = require('mongoose')
require('./residence.model')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    
    residence:[{type:mongoose.Schema.Types.ObjectId, ref:'residence'}]
   
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)