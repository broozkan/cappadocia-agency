import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import PaymentPageTitle from '../../components/PageTitle/PaymentPageTitle'
import SuccessPaymentPageTitle from '../../components/PageTitle/SuccessPaymentPageTitle'
import api from '../../services/api'

class PaymentSuccessView extends Component {

    async componentDidMount() {
        if (!localStorage.getItem('pre_reservation_data')) {
            window.location.href = '/'
        }

        if (!this.props.match.params.paymentMethod) {
            const preReservationData = JSON.parse(localStorage.getItem('pre_reservation_data'))

            const data = {
                reservation: preReservationData,
                reservation_payment_method: "online"
            }

            const submitResponse = await api.post('/reservation/new', data)
        }



        localStorage.removeItem('pre_reservation_data')
    }


    render() {

        return (
            <>
                <main>
                    <SuccessPaymentPageTitle />

                    <Footer />
                </main>
            </>
        )
    }

}

export default PaymentSuccessView