import React, { Component } from 'react'
import AsideTotal from '../../components/Aside/AsideBasketTotal'
import Footer from '../../components/Footer/Footer'
import BasketPageTitle from '../../components/PageTitle/BasketPageTitle'
import PassengerFormPageTitle from '../../components/PageTitle/PassengerFormPageTitle'
import TableBasketItems from '../../components/Table/TableBasketItems'
import api from '../../services/api'
import FormPassengerInformation from '../../components/Form/FormPassengerInformation'
import { CommonContext } from '../../contexts/site/CommonContext'

class PassengerFormView extends Component {




    render() {

    

        return (
            <>
                <main>
                    <PassengerFormPageTitle />
                    <div class="bg_color_1">
                        <div class="container margin_60_35">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="box_cart">
                                        <FormPassengerInformation />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </main>
            </>
        )
    }

}

export default PassengerFormView