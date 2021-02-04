const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    user_username: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    }

})


module.exports.userSchema = userSchema
module.exports.userModel = mongoose.model('User', userSchema)