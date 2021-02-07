import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import PaymentPageTitle from '../../components/PageTitle/PaymentPageTitle'
import SuccessPaymentPageTitle from '../../components/PageTitle/SuccessPaymentPageTitle'

class PaymentSuccessView extends Component {

    componentDidMount(){
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