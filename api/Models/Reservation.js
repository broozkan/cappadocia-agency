const mongoose = require('mongoose')
var aggregatePaginate = require("mongoose-aggregate-paginate-v2")
const Basket = require("./Basket")

const reservationSchema = mongoose.Schema({
    reservation: {
        type: Object,
        required: true
    },
    reservation_payment_method: {
        type: String,
        required: true
    },
    reservation_verification: {
        type: String,
        required: true,
        default: "pending"
    },
    reservation_verification_date: {
        type: Date,
        required: false
    },
    reservation_query_date: {
        type: String,
        required: true
    },
})

reservationSchema.plugin(aggregatePaginate);


module.exports.reservationSchema = reservationSchema
module.exports.reservationModel = mongoose.model('Reservation', reservationSchema)