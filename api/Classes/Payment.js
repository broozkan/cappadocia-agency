const Iyzipay = require('iyzipay');


class Payment {

    constructor() {
        this.api_key = process.env.IYZICO_API_KEY
        this.secret_key = process.env.IYZICO_SECURITY_KEY
        this.uri = 'https://api.iyzipay.com'
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

    initializePayment(data, cb) {

        const passengerInformations = JSON.parse(data.reservation_passengers)

        var request = {
            locale: Iyzipay.LOCALE.TR,
            conversationId: Math.floor(Math.random() * 1000000),
            price: data.reservation_price,
            paidPrice: data.reservation_price,
            currency: Iyzipay.CURRENCY.TRY,
            basketId: Math.floor(Math.random() * 1000000),
            paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
            callbackUrl: `${process.env.BACKEND_BASE_URL}/backend/reservation/callback`,
            enabledInstallments: [2, 3, 6, 9],
            buyer: {
                id: passengerInformations.contact_informations_id_number,
                name: `${passengerInformations.contact_informations_name} ${passengerInformations.contact_informations_surname}`,
                surname: passengerInformations.contact_informations_surname,
                gsmNumber: passengerInformations.contact_informations_phone_number,
                email: passengerInformations.contact_informations_email_address,
                identityNumber: passengerInformations.contact_informations_id_number,
                lastLoginDate: '2015-10-05 12:43:35',
                registrationDate: '2013-04-21 15:12:09',
                registrationAddress: 'Esentepe Mah. Senyurt Sit. Kat:2',
                ip: '88.236.188.122',
                city: 'Istanbul',
                country: 'Turkey',
                zipCode: '34394'
            },
            shippingAddress: {
                contactName: `${passengerInformations.contact_informations_name} ${passengerInformations.contact_informations_surname}`,
                city: 'Istanbul',
                country: passengerInformations.adult_passengers[0].passenger_country,
                address: 'Esentepe Mah. Senyurt Sit. Kat:2',
                zipCode: '34394'
            },
            billingAddress: {
                contactName: `${passengerInformations.contact_informations_name} ${passengerInformations.contact_informations_surname}`,
                city: 'Istanbul',
                country: passengerInformations.adult_passengers[0].passenger_country,
                address: 'Esentepe Mah. Senyurt Sit. Kat:2',
                zipCode: '34394'
            },
            basketItems: [
                {
                    id: "1224335",
                    name: data.reservation_activity_name,
                    category1: 'Turlar',
                    category2: 'Balon Turları',
                    itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                    price: data.reservation_price
                }
            ]
        };

        console.log(request);

        this.iyzipay.checkoutFormInitialize.create(request, function (err, result) {
            if (err) {
                cb(err)
            } else {
                cb(result)
            }
        });
    }


    retrieve(data, cb) {
        this.iyzipay.checkoutForm.retrieve({
            token: data.token
        }, function (err, result) {
            console.log(err, result);
            if (err) {
                cb(err)
            } else {
                cb(result)
            }
        });
    }






}

module.exports = Payment






