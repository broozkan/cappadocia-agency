import React, { Component } from 'react'
import AsideTotal from '../../components/Aside/AsideBasketTotal'
import AsideTotalPayment from '../../components/Aside/AsideTotalPayment'
import Footer from '../../components/Footer/Footer'
import FormPayment from '../../components/Form/FormPayment'
import MessageExistingCustomer from '../../components/Message/MessageExistingCustomer'
import BasketPageTitle from '../../components/PageTitle/BasketPageTitle'
import PaymentPageTitle from '../../components/PageTitle/PaymentPageTitle'
import TableBasketItems from '../../components/Table/TableBasketItems'
import { CommonContext } from '../../contexts/site/CommonContext'

class PaymentView extends Component {
    static contextType = CommonContext
    

    render(){
    
        console.log(JSON.parse(localStorage.getItem('pre_reservation_data')));
        return (
            <>
                <main>
                    <PaymentPageTitle />
                    <div class="bg_color_1" style={{ transform: 'none' }}>
                        <div class="container margin_60_35" style={{ transform: 'none' }}>
                            <FormPayment />
                        </div>
                    </div>
                    <Footer />
                </main>
            </>
        )
    }
   
}

export default PaymentView