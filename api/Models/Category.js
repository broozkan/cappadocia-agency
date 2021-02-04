const mongoose = require('mongoose')
var aggregatePaginate = require("mongoose-aggregate-paginate-v2")

const categorySchema = mongoose.Schema({
    category_name: {
        type: String,
        required: [true, "Kategori adı zorunludur"]
    },
    category_description: {
        type: String,
        required: [true, "Kategori açıklaması zorunludur"]
    },
    category_header_visibility: {
        type: Boolean,
        required: [true, "Kategori vitrin görünümü zorunludur"]
    }
})

categorySchema.plugin(aggregatePaginate);


module.exports.categorySchema = categorySchema
module.exports.categoryModel = mongoose.model('Category', categorySchema)