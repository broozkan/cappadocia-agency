const express = require('express')
const router = express.Router()
const Category = require('../Models/Category')
const deleteEmptyFilters = require('../Controllers/Controller')

// get categories list
router.get('/list/:page', async (req, res) => {



    if (req.query) {
        req.query = deleteEmptyFilters.deleteEmptyFilters(req.query)

        if (req.query.category_name) {
            req.query.category_name = { $regex: new RegExp(req.query.category_name, "i") }
        }

        if (req.query.category_header_visibility) {
            req.query.category_header_visibility = true
        }
    }


    console.log(req.query);
    const aggregate = Category.categoryModel.aggregate([{
        $match: req.query
    }])


    const options = {
        page: req.params.page,
        limit: 25
    }

    Category.categoryModel.aggregatePaginate(aggregate, options, (err, result) => {
        res.send(result)
    })
})

// get specific category
router.get('/get/:categoryId', async (req, res) => {

    Category.categoryModel.findById(req.params.categoryId, (err, result) => {
        res.send(result)
    })
})


router.post('/new', async (req, res) => {



    const category = new Category.categoryModel({
        category_name: req.body.category_name,
        category_description: req.body.category_description,
        category_header_visibility: req.body.category_header_visibility
    })

    const savedCategory = category.save((err) => {
        if (err) {
            console.log(err);
            res.send({
                response: false,
                responseData: err.message
            })
        } else {
            res.send({
                response: true,
                responseData: category
            })

        }
    })

})


router.put('/update/:categoryId', async (req, res) => {


    // update operation
    await Category.categoryModel.findByIdAndUpdate(
        { _id: req.params.categoryId },
        {
            category_name: req.body.category_name,
            category_description: req.body.category_description,
            category_header_visibility: req.body.category_header_visibility
        }

        , (err, updatedCategory) => {
            if (err) {
                res.send({
                    response: false,
                    responseData: err
                })
            } else {
                res.send({
                    response: true,
                    responseData: updatedCategory
                })
            }
        })

})


router.delete('/delete/:categoryId', async (req, res) => {

    await Category.categoryModel.deleteOne({ _id: req.params.categoryId }, (err) => {
        if (err) {
            res.send({
                response: false,
                responseData: err
            })
        } else {
            res.send({
                response: true,
                responseData: "Başarılı"
            })
        }
    })

})


module.exports = router;