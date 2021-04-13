const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Controller = require('../Controllers/Controller')
const dateFormat = require('dateformat')
const { sendEmail } = require('../Controllers/Controller')
const Payment = require('../Classes/Payment')
const Reservation = require('../Classes/Reservation')
const ReservationModel = require('../Models/Reservation')
const Email = require('../Classes/Email')


// get reservation list
router.get('/list/:page', async (req, res) => {



    if (req.query) {
        req.query = Controller.deleteEmptyFilters(req.query)


        if (req.query._id) {
            req.query._id = mongoose.Types.ObjectId(req.query._id)
        }


        if (req.query["reservation.pre_reservation_passenger.contact_informations_name"]) {
            req.query["reservation.pre_reservation_passenger.contact_informations_name"] = { $regex: new RegExp(req.query["reservation.pre_reservation_passenger.contact_informations_name"], "i") }
        }

        if (req.query["reservation_basket.basket_activity._id"]) {
            req.query["reservation_basket.basket_activity._id"] = mongoose.Types.ObjectId(req.query["reservation_basket.basket_activity._id"])
        }

    }


    const aggregate = ReservationModel.reservationModel.aggregate([
        { $match: req.query },
        { $sort: { reservation_query_date: -1 } }
    ])


    const options = {
        page: req.params.page,
        limit: 25
    }

    ReservationModel.reservationModel.aggregatePaginate(aggregate, options, (err, result) => {
        res.send(result)
    })
})

// get specific reservation
router.get('/get/:reservationId', async (req, res) => {

    ReservationModel.reservationModel.findById(req.params.reservationId, (err, result) => {
        res.send(result)
    })
})


router.post('/new', async (req, res) => {


    if (req.body.reservation_payment_method == "online") {

        // then save reservation
        const reservation = new Reservation(req.body.reservation, req.body.reservation_payment_method)
        reservation.save((result) => {

            res.send(result)
        })
    } else {

        const reservation = new Reservation(req.body.reservation, req.body.reservation_payment_method)
        reservation.save((result) => {

            if (result.status != 400) {
                const email = new Email(
                    req.body.reservation.pre_reservation_passenger.contact_informations_email_address,
                    "Rezervasyon Bilgileri | turkeyballoonscappadocia.com"
                )
                email.setReservation(req.body.reservation)
                email.setReservationText()
                
            }
            res.send(result)
        })

    }
})


router.get('/initialize', async (req, res) => {

    const payment = new Payment()

    payment.initializePayment(req.query, (result) => {
        res.send(result)
    })

})


router.post('/callback', async (req, res) => {

    const payment = new Payment()
    payment.retrieve(req.body, (result) => {
        if (result.paymentStatus == 'SUCCESS') {



            res.redirect(`${process.env.FRONTEND_BASE_URL}/odeme/basarili`)
        } else {
            res.redirect(`${process.env.FRONTEND_BASE_URL}/odeme/basarisiz/${result.errorMessage}`)
        }
    })

})



const newReservation = (reservationData) => {



    // reservationData.reservation_query_date = dateFormat(new Date(), "yyyy-mm-dd");


    // const reservation = new Reservation.reservationModel({
    //     reservation: reservationData.reservation,
    //     reservation_payment_method: reservationData.payment_method,
    //     reservation_verification: 'pending',
    //     reservation_query_date: reservationData.reservation_query_date
    // })

    // return reservation.save((err) => {
    //     if (err) {
    //         console.log(err);
    //         return ({
    //             response: false,
    //             responseData: err.message
    //         })
    //     } else {

    //         let emailHtml = '<h1>Merhaba, <br> öncelikle bizleri tercih ettiğiniz için teşekkür ederiz.</h1>'
    //         emailHtml += '<h3>' + reservationData.conversation_id + ' numaralı rezervasyon bilgileriniz aşağıdadır.</h3>'
    //         emailHtml += '<br></br>'
    //         emailHtml += '<div>'
    //         emailHtml += '<table width="100%" padding="10px">'
    //         emailHtml += '<thead>'
    //         emailHtml += '<th>Aktivite</th>'
    //         emailHtml += '<th>Tarih / Saat</th>'
    //         emailHtml += '<th>Yetişkin</th>'
    //         emailHtml += '<th>Çocuk</th>'
    //         emailHtml += '</thead>'
    //         emailHtml += '<tbody>'
    //         emailHtml += '<tr style="text-align:center">'
    //         emailHtml += '<td>' + reservationData.reservation.pre_reservation_activity.activity_name + '</td>'
    //         emailHtml += '<td>' + reservationData.reservation.pre_reservation_activity_date + ' / ' + reservationData.reservation.pre_reservation_activity_beginning_hour + '-' + reservationData.reservation.pre_reservation_activity_ending_hour + '</td>'
    //         emailHtml += '<td>' + reservationData.reservation.pre_reservation_adult_count + '</td>'
    //         emailHtml += '<td>' + reservationData.reservation.pre_reservation_child_count + '</td>'
    //         emailHtml += '</tr>'
    //         emailHtml += '</tbody>'
    //         emailHtml += '</table>'
    //         emailHtml += '</div>'

    //         const emailData = {
    //             to: reservationData.reservation.pre_reservation_passenger.contact_informations_email_address,
    //             title: 'Rezervasyon Bilgileri | turkeyballoonscappadocia.com',
    //             text: emailHtml
    //         }

    //         sendEmail(emailData, (response) => { })

    //         return ({
    //             response: true,
    //             responseData: reservation,
    //             conversationId: reservationData.conversation_id
    //         })




    //     }
    // })

}

router.put('/update/:reservationId', async (req, res) => {



    // update operation
    await ReservationModel.reservationModel.findByIdAndUpdate(
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
    await ReservationModel.reservationModel.findByIdAndUpdate(
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
    await ReservationModel.reservationModel.findByIdAndUpdate(
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

    await ReservationModel.reservationModel.deleteOne({ _id: req.params.reservationId }, (err) => {
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