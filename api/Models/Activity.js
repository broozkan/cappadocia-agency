const mongoose = require('mongoose')
var aggregatePaginate = require("mongoose-aggregate-paginate-v2")
const Category = require('./Category')

const activitySchema = mongoose.Schema({
    activity_category: [Category.categorySchema],
    activity_language: {
        type: String,
        required: [true, "Aktivite dili zorunludur"]
    },
    activity_name: {
        type: String,
        required: [true, "Aktivite adı zorunludur"]
    },
    activity_short_description: {
        type: String,
        required: [true, "Aktivite kısa açıklaması zorunludur"]
    },
    activity_photos: {
        type: Array,
        required: [true, "Aktivite görselleri zorunludur"]
    },
    activity_currency: {
        type: String,
        required: [true, "Aktivite para birimi zorunludur"]
    },
    activity_price: {
        type: String,
        required: [true, "Aktivite ücreti zorunludur"]
    },
    activity_description: {
        type: String,
        required: [true, "Aktivite açıklaması zorunludur"]
    },
    activity_cancellation_terms: {
        type: Array,
        required: false
    },
    activity_action_plan: {
        type: Array,
        required: false
    },
    activity_additional_informations: {
        type: Array,
        required: false
    },
    activity_quota_informations: {
        type: Array,
        required: false
    },
    activity_view_count: {
        type: Number,
        min: 0,
        default: 0
    },
    activity_rating: {
        type: Number,
        default: 10,
        min: 0,
        max: 10
    },
    activity_rating_text: {
        type: String,
        default: "Çok İyi"
    }
})

activitySchema.plugin(aggregatePaginate);


module.exports.activitySchema = activitySchema
module.exports.activityModel = mongoose.model('Activity', activitySchema)