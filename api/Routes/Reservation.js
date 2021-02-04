const express = require('express')
const router = express.Router()
const Reservation = require('../Models/Reservation')
const mongoose = require('mongoose')
const deleteEmptyFilters = require('../Controllers/Controller')
const dateFormat = require('dateformat')

// get reservation list
router.get('/list/:page', async (req, res) => {



    if (req.query) {
        req.query = deleteEmptyFilters.deleteEmptyFilters(req.query)


        if (req.query._id) {
            req.query._id = mongoose.Types.ObjectId(req.query._id)
        }

        if (req.query["reservation_basket.basket_activity._id"]) {
            req.query["reservation_basket.basket_activity._id"] = mongoose.Types.ObjectId(req.query["reservation_basket.basket_activity._id"])
        }

    }


    const aggregate = Reservation.reservationModel.aggregate([{
        $match: req.query
    }])


    const options = {
        page: req.params.page,
        limit: 25
    }

    Reservation.reservationModel.aggregatePaginate(aggregate, options, (err, result) => {
        res.send(result)
    })
})

// get specific reservation
router.get('/get/:reservationId', async (req, res) => {

    Reservation.reservationModel.findById(req.params.reservationId, (err, result) => {
        res.send(result)
    })
})


router.post('/new', async (req, res) => {

    const date = dateFormat(new Date(), "yyyy-mm-dd");

    const reservation = new Reservation.reservationModel({
        reservation_basket: req.body.reservation_basket,
        reservation_payment_method: req.body.reservation_payment_method,
        reservation_verification: req.body.reservation_verification,
        reservation_verification_date: req.body.reservation_verification_date,
        reservation_query_date: date
    })

    const savedReservation = reservation.save((err) => {
        if (err) {
            console.log(err);
            res.send({
                response: false,
                responseData: err.message
            })
        } else {
            res.send({
                response: true,
                responseData: reservation
            })

        }
    })

})


router.put('/update/:reservationId', async (req, res) => {



    // update operation
    await Reservation.reservationModel.findByIdAndUpdate(
        { _id: req.params.reservationId },
        {
            reservation_basket: req.body.reservation_basket,
            reservation_payment_method: req.body.reservation_payment_method,
            reservation_verification: req.body.reservation_verification,
            reservation_verification_date: req.body.reservation_verification_date
        }

        , (err, updatedReservation) => {
            if (err) {
                res.send({
                    response: false,
                    responseData: err
                })
            } else {
                res.send({
                    response: true,
                    responseData: updatedReservation
                })
            }
        })

})

router.post('/approve-reservation/:reservationId', async (req, res) => {
    // update operation
    await Reservation.reservationModel.findByIdAndUpdate(
        { _id: req.params.reservationId },
        {
            reservation_verification: "approved"
        }

        , (err, updatedReservation) => {
            if (err) {
                res.send({
                    response: false,
                    responseData: err
                })
            } else {
                res.send({
                    response: true,
                    responseData: updatedReservation
                })
            }
        })
})


router.post('/cancel-reservation/:reservationId', async (req, res) => {
    // update operation
    await Reservation.reservationModel.findByIdAndUpdate(
        { _id: req.params.reservationId },
        {
            reservation_verification: "cancelled"
        }

        , (err, updatedReservation) => {
            if (err) {
                res.send({
                    response: false,
                    responseData: err
                })
            } else {
                res.send({
                    response: true,
                    responseData: updatedReservation
                })
            }
        })
})
router.delete('/delete/:reservationId', async (req, res) => {

    await Reservation.reservationModel.deleteOne({ _id: req.params.reservationId }, (err) => {
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