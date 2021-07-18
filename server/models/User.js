const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    createdAt: String,
    resetPasswordToken: String,
    resetPasswordExpire: String
})

const User = mongoose.model('user', userSchema)
module.exports = User