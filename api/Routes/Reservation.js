const express = require('express')
const router = express.Router()
const Reservation = require('../Models/Reservation')
const mongoose = require('mongoose')
const Controller = require('../Controllers/Controller')
const dateFormat = require('dateformat')
const Iyzipay = require('iyzipay');

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


router.post('/new', Controller.verifySiteToken, async (req, res) => {

    console.log(req.user);

    const iyzipay = new Iyzipay({
        apiKey: 'sandbox-WYBF3AMY1cS6gdEE46x0jBiMmCBrOdH0',
        secretKey: 'sandbox-jtZfi0M2jSWYen8B1E6S76r36FBMspjg',
        uri: 'https://sandbox-api.iyzipay.com'
    });

    const conversationId = Math.random(0, 99999999999)
    const basketId = Math.random(0, 9999)

    var request = {
        locale: Iyzipay.LOCALE.TR,
        conversationId: conversationId,
        price: req.body.payment_total,
        paidPrice: req.body.payment_total,
        currency: Iyzipay.CURRENCY.TRY,
        installment: '1',
        basketId: basketId,
        paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
        paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
        paymentCard: {
            cardHolderName: req.body.payment_customer_name,
            cardNumber: req.body.payment_cart_number,
            expireMonth: req.body.payment_cart_expiration_month,
            expireYear: req.body.payment_cart_expiration_year,
            cvc: req.body.payment_cart_ccv,
            registerCard: '0'
        },
        buyer: {
            id: 'BY789',
            name: req.body.payment_customer_name,
            surname: req.body.payment_customer_surname,
            gsmNumber: req.body.payment_customer_phone_number,
            email: req.body.payment_customer_email,
            identityNumber: '74300864791',
            lastLoginDate: '2015-10-05 12:43:35',
            registrationDate: '2013-04-21 15:12:09',
            registrationAddress: req.body.payment_billing_address_1,
            ip: '85.34.78.112',
            city: req.body.payment_billing_city,
            country: req.body.payment_billing_country,
            zipCode: req.body.payment_billing_postal_code
        },
        shippingAddress: {
            contactName: req.body.payment_customer_name,
            city: req.body.payment_billing_city,
            country: req.body.payment_billing_country,
            address: req.body.payment_billing_address_1,
            zipCode: req.body.payment_billing_postal_code
        },
        billingAddress: {
            contactName: req.body.payment_customer_name,
            city: req.body.payment_billing_city,
            country: req.body.payment_billing_country,
            address: req.body.payment_billing_address_1,
            zipCode: req.body.payment_billing_postal_code
        },
        basketItems: [
            {
                id: 'BI101',
                name: 'Binocular',
                category1: 'Collectibles',
                category2: 'Accessories',
                itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                price: '0.3'
            },
            {
                id: 'BI102',
                name: 'Game code',
                category1: 'Game',
                category2: 'Online Game Items',
                itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
                price: '0.5'
            },
            {
                id: 'BI103',
                name: 'Usb',
                category1: 'Electronics',
                category2: 'Usb / Cable',
                itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                price: '0.2'
            }
        ]
    };
    
    iyzipay.payment.create(request, function (err, result) {
        if (result.status == 'success') {
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
        }else{
            res.send({
                response: false,
                responseData: err
            })
        }

       
    });



   

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