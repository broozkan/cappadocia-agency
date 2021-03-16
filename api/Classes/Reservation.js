const ReservationModel = require('../Models/Reservation')
const dateFormat = require('dateformat')


class Reservation {
    constructor(reservation, payment_method) {

        this.reservation = reservation
        this.payment_method = payment_method
        this.verification = 'pending'
        this.query_date = dateFormat(new Date(), "yyyy-mm-dd");

    }


    async save(cb) {
        const savedReservation = new ReservationModel.reservationModel({
            reservation: this.reservation,
            reservation_payment_method: this.payment_method,
            reservation_verification: this.verification,
            reservation_query_date: this.query_date
        })

        await savedReservation.save((err) => {
            if (err) {
                cb({
                    response: false,
                    responseData: err.message
                })
            } else {
                cb({
                    response: true,
                    responseData: savedReservation
                })
            }
        })
    }
}

module.exports = Reservation