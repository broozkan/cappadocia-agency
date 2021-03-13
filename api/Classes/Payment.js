const Iyzipay = require('iyzipay');


class Payment {

    constructor() {
        this.api_key = 'sandbox-wYjn012xH64ac5xtjIm1RodSFULWrUPy'
        this.secret_key = 'sandbox-aiGYYYCnhDcCoP1wG2WmePSuyHgx9Ns8'
        this.uri = 'https://sandbox-api.iyzipay.com'
        this.request = {}
        this.conversation_id = Math.floor((Math.random() * 1000000))
        this.basket_id = Math.floor((Math.random() * 1000000))

        this.iyzipay = new Iyzipay({
            apiKey: this.api_key,
            secretKey: this.secret_key,
            uri: this.uri
        });

        this.response = {}
    }


    setRequest(data) {

        this.request = {
            locale: Iyzipay.LOCALE.TR,
            conversationId: this.conversation_id,
            price: data.reservation.pre_reservation_total,
            paidPrice: data.reservation.pre_reservation_total,
            currency: Iyzipay.CURRENCY.TRY,
            installment: '1',
            basketId: this.basket_id,
            paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
            paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
            paymentCard: {
                cardHolderName: data.payment_cart_name,
                cardNumber: data.payment_cart_number,
                expireMonth: data.payment_cart_expiration_month,
                expireYear: data.payment_cart_expiration_year,
                cvc: data.payment_cart_ccv,
                registerCard: '0'
            },
            buyer: {
                id: data.reservation.pre_reservation_passenger.contact_informations_id_number,
                name: data.reservation.pre_reservation_passenger.passenger_name,
                surname: data.reservation.pre_reservation_passenger.passenger_surname,
                gsmNumber: data.reservation.pre_reservation_passenger.passenger_phone_number,
                email: data.reservation.pre_reservation_passenger.contact_informations_email_address,
                identityNumber: '74300864791',
                lastLoginDate: '2015-10-05 12:43:35',
                registrationDate: '2013-04-21 15:12:09',
                registrationAddress: data.reservation.pre_reservation_passenger.contact_informations_address,
                ip: '85.34.78.112',
                city: 'Nevsehir',
                country: data.reservation.pre_reservation_passenger.passenger_country,
                zipCode: '58040'
            },
            shippingAddress: {
                contactName: data.reservation.pre_reservation_passenger.passenger_name,
                city: 'Nevsehir',
                country: data.reservation.pre_reservation_passenger.passenger_country,
                address: data.reservation.pre_reservation_passenger.contact_informations_address,
                zipCode: '58040'
            },
            billingAddress: {
                contactName: data.reservation.pre_reservation_passenger.passenger_name,
                city: 'Nevsehir',
                country: data.reservation.pre_reservation_passenger.passenger_country,
                address: data.reservation.pre_reservation_passenger.contact_informations_address,
                zipCode: '58040'
            },
            basketItems: [
                {
                    id: data.reservation.pre_reservation_activity._id,
                    name: data.reservation.pre_reservation_activity.activity_name,
                    category1: data.reservation.pre_reservation_activity.activity_category[0].category_name,
                    category2: '',
                    itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                    price: data.reservation.pre_reservation_total
                }
            ]
        };
    }


    executePayment(cb) {

        this.iyzipay.payment.create(this.request, (err, result) => {
            if (result.status == 'success') {
                this.response = {
                    response: true,
                    responseData: result
                }
                // newReservation(data, (result) => {
                //     if (result) {
                //         res.send(result)
                //     }
                // })


            } else {
                this.response = {
                    response: false,
                    responseData: result.errorMessage
                }
            }

            cb(this.response)

        });

    }





}

module.exports = Payment