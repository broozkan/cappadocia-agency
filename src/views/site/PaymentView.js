import React from 'react'
import AsideTotal from '../../components/Aside/AsideTotal'
import AsideTotalPayment from '../../components/Aside/AsideTotalPayment'
import Footer from '../../components/Footer/Footer'
import FormPayment from '../../components/Form/FormPayment'
import MessageExistingCustomer from '../../components/Message/MessageExistingCustomer'
import BasketPageTitle from '../../components/PageTitle/BasketPageTitle'
import PaymentPageTitle from '../../components/PageTitle/PaymentPageTitle'
import TableBasketItems from '../../components/Table/TableBasketItems'

const PaymentView = () => {
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

export default PaymentView