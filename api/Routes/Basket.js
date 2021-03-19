const express = require('express')
const router = express.Router()
const Basket = require('../Models/Basket')
const mongoose = require('mongoose')
const deleteEmptyFilters = require('../Controllers/Controller')

// get basket list
router.get('/list/:page', async (req, res) => {



    if (req.query) {
        req.query = deleteEmptyFilters.deleteEmptyFilters(req.query)


        if (req.query._id) {
            req.query._id = mongoose.Types.ObjectId(req.query._id)
        }

    }


    const aggregate = Basket.basketModel.aggregate([{
        $match: req.query
    }])


    const options = {
        page: req.params.page,
        limit: 25
    }

    Basket.basketModel.aggregatePaginate(aggregate, options, (err, result) => {
        res.send(result)
    })
})

// get specific basket
router.get('/get/:basketId', async (req, res) => {

    Basket.basketModel.findById(req.params.basketId, (err, result) => {
        res.send(result)
    })
})


router.post('/new', async (req, res) => {



    const basket = new Basket.basketModel({
        basket_activity: req.body.basket_activity,
        basket_activity_date: req.body.basket_activity_date,
        basket_activity_beginning_hour: req.body.basket_activity_beginning_hour,
        basket_activity_ending_hour: req.body.basket_activity_ending_hour,
        basket_adult_count: req.body.basket_adult_count,
        basket_child_count: req.body.basket_child_count,
        basket_total: req.body.basket_total
    })

    const savedBasket = basket.save((err) => {
        if (err) {
            console.log(err);
            res.send({
                response: false,
                responseData: err.message
            })
        } else {
            res.send({
                response: true,
                responseData: basket
            })

        }
    })

})


router.put('/update/:basketId', async (req, res) => {



    // update operation
    await Basket.basketModel.findByIdAndUpdate(
        { _id: req.params.basketId },
        {
            basket_activity: req.body.basket_activity,
            basket_activity_date: req.body.basket_activity_date,
            basket_activity_beginning_hour: req.body.basket_activity_beginning_hour,
            basket_activity_ending_hour: req.body.basket_activity_ending_hour,
            basket_adult_count: req.body.basket_adult_count,
            basket_child_count: req.body.basket_child_count,
            basket_total: req.body.basket_total
        }

        , (err, updatedBasket) => {
            if (err) {
                res.send({
                    response: false,
                    responseData: err
                })
            } else {
                res.send({
                    response: true,
                    responseData: updatedBasket
                })
            }
        })

})


router.delete('/delete/:basketId', async (req, res) => {

    await Basket.basketModel.deleteOne({ _id: req.params.basketId }, (err) => {
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