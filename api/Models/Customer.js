const mongoose = require('mongoose')


const customerSchema = mongoose.Schema({
    customer_name: {
        type: String,
        required: true
    },
    customer_surname: {
        type: String,
        required: true
    },
    customer_email: {
        type: String,
        required: true
    },
    customer_phone_number: {
        type: String,
        required: true
    },
    customer_password: {
        type: String,
        required: true
    },
    customer_country: {
        type: String,
        required: false
    },
    customer_email_verification: {
        type: Boolean,
        default: false
    }

})


module.exports.customerSchema = customerSchema
module.exports.customerModel = mongoose.model('Customer', customerSchema)