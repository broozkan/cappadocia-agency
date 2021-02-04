const mongoose = require('mongoose')
var aggregatePaginate = require("mongoose-aggregate-paginate-v2")
const Activity = require("./Activity")

const basketSchema = mongoose.Schema({
    basket_activity: [Activity.activitySchema],
    basket_activity_date: {
        type: String,
        required: [true, "Sepet aktivite tarihi zorunludur"]
    },
    basket_activity_beginning_hour: {
        type: String,
        required: true
    },
    basket_activity_ending_hour: {
        type: String,
        required: true
    },
    basket_mature_count: {
        type: Number,
        required: true
    },
    basket_child_count: {
        type: Number,
        required: false
    },
    basket_total: {
        type: Number,
        required: true
    }
})

basketSchema.plugin(aggregatePaginate);


module.exports.basketSchema = basketSchema
module.exports.basketModel = mongoose.model('Basket', basketSchema)