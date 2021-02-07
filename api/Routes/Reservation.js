const express = require('express')
const router = express.Router()
const Reservation = require('../Models/Reservation')
const mongoose = require('mongoose')
const Controller = require('../Controllers/Controller')
const dateFormat = require('dateformat')
const Iyzipay = require('iyzipay');
const { sendEmail } = require('../Controllers/Controller')


// get reservation list
router.get('/list/:page', async (req, res) => {



    if (req.query) {
        req.query = Controller.deleteEmptyFilters(req.query)


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

    if (req.body.payment_method == "online") {
        const iyzipay = new Iyzipay({
            apiKey: 'sandbox-WYBF3AMY1cS6gdEE46x0jBiMmCBrOdH0',
            secretKey: 'sandbox-jtZfi0M2jSWYen8B1E6S76r36FBMspjg',
            uri: 'https://sandbox-api.iyzipay.com'
        });

        req.body.conversation_id = Math.floor((Math.random() * 1000000))
        req.body.basket_id = Math.floor((Math.random() * 1000000))

        var request = {
            locale: Iyzipay.LOCALE.TR,
            conversationId: req.body.conversation_id,
            price: req.body.reservation.pre_reservation_total,
            paidPrice: req.body.reservation.pre_reservation_total,
            currency: Iyzipay.CURRENCY.TRY,
            installment: '1',
            basketId: req.body.basket_id,
            paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
            paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
            paymentCard: {
                cardHolderName: req.body.payment_cart_name,
                cardNumber: req.body.payment_cart_number,
                expireMonth: req.body.payment_cart_expiration_month,
                expireYear: req.body.payment_cart_expiration_year,
                cvc: req.body.payment_cart_ccv,
                registerCard: '0'
            },
            buyer: {
                id: 'BY789',
                name: req.body.reservation.pre_reservation_passenger.passenger_name,
                surname: req.body.reservation.pre_reservation_passenger.passenger_surname,
                gsmNumber: req.body.reservation.pre_reservation_passenger.passenger_phone_number,
                email: req.body.reservation.pre_reservation_passenger.passenger_email,
                identityNumber: '74300864791',
                lastLoginDate: '2015-10-05 12:43:35',
                registrationDate: '2013-04-21 15:12:09',
                registrationAddress: req.body.reservation.pre_reservation_passenger.passenger_address,
                ip: '85.34.78.112',
                city: 'Nevsehir',
                country: req.body.reservation.pre_reservation_passenger.passenger_country,
                zipCode: '58040'
            },
            shippingAddress: {
                contactName: req.body.reservation.pre_reservation_passenger.passenger_name,
                city: 'Nevsehir',
                country: req.body.reservation.pre_reservation_passenger.passenger_country,
                address: req.body.reservation.pre_reservation_passenger.passenger_address,
                zipCode: '58040'
            },
            billingAddress: {
                contactName: req.body.reservation.pre_reservation_passenger.passenger_name,
                city: 'Nevsehir',
                country: req.body.reservation.pre_reservation_passenger.passenger_country,
                address: req.body.reservation.pre_reservation_passenger.passenger_address,
                zipCode: '58040'
            },
            basketItems: [
                {
                    id: 'BI101',
                    name: req.body.reservation.pre_reservation_activity.activity_name,
                    category1: req.body.reservation.pre_reservation_activity.activity_category[0].category_name,
                    category2: '',
                    itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                    price: req.body.reservation.pre_reservation_total
                }
            ]
        };

        iyzipay.payment.create(request, function (err, result) {
            if (result.status == 'success') {

                newReservation(req.body, (result) => {
                    if (result) {
                        res.send(result)
                    }
                })


            } else {
                res.send({
                    response: false,
                    responseData: result.errorMessage
                })
            }


        });
    } else {
        newReservation(req.body, (result) => {
            res.send(result)
        })

    }







})


const newReservation = (reservationData) => {

    reservationData.reservation_query_date = dateFormat(new Date(), "yyyy-mm-dd");


    const reservation = new Reservation.reservationModel({
        reservation: reservationData.reservation,
        reservation_payment_method: reservationData.payment_method,
        reservation_verification: 'pending',
        reservation_query_date: reservationData.reservation_query_date
    })

    const savedReservation = reservation.save((err) => {
        if (err) {
            console.log(err);
            return ({
                response: false,
                responseData: err.message
            })
        } else {

            let emailHtml = '<h1>Merhaba, <br> öncelikle bizleri tercih ettiğiniz için teşekkür ederiz.</h1>'
            emailHtml += '<h3>' + reservationData.conversation_id + ' numaralı rezervasyon bilgileriniz aşağıdadır.</h3>'
            emailHtml += '<br></br>'
            emailHtml += '<div>'
            emailHtml += '<table width="100%" padding="10px">'
            emailHtml += '<thead>'
            emailHtml += '<th>Aktivite</th>'
            emailHtml += '<th>Tarih / Saat</th>'
            emailHtml += '<th>Yetişkin</th>'
            emailHtml += '<th>Çocuk</th>'
            emailHtml += '</thead>'
            emailHtml += '<tbody>'
            emailHtml += '<tr style="text-align:center">'
            emailHtml += '<td>' + reservationData.reservation.pre_reservation_activity.activity_name + '</td>'
            emailHtml += '<td>' + reservationData.reservation.pre_reservation_activity_date + ' / ' + reservationData.reservation.pre_reservation_activity_beginning_hour + '-' + reservationData.reservation.pre_reservation_activity_ending_hour + '</td>'
            emailHtml += '<td>' + reservationData.reservation.pre_reservation_mature_count + '</td>'
            emailHtml += '<td>' + reservationData.reservation.pre_reservation_child_count + '</td>'
            emailHtml += '</tr>'
            emailHtml += '</tbody>'
            emailHtml += '</table>'
            emailHtml += '</div>'

            const emailData = {
                to: reservationData.reservation.pre_reservation_passenger.passenger_email,
                title: 'Rezervasyon Bilgileri | turkeyballoonscappadocia.com',
                text: emailHtml
            }

            sendEmail(emailData, (response) => { })

            return ({
                response: true,
                responseData: reservation,
                conversationId: reservationData.conversation_id
            })




        }
    })

}

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