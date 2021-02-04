import React, { Component } from 'react'
import AsideTotal from '../../components/Aside/AsideBasketTotal'
import Footer from '../../components/Footer/Footer'
import BasketPageTitle from '../../components/PageTitle/BasketPageTitle'
import TableBasketItems from '../../components/Table/TableBasketItems'
import api from '../../services/api'

class BasketView extends Component {




    render() {

       



        return (
            <>
                <main>
                    <BasketPageTitle />
                    <div class="bg_color_1">
                        <div class="container margin_60_35">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="box_cart">
                                        <TableBasketItems />
                                        
                                    </div>
                                </div>

                                <AsideTotal />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </main>
            </>
        )
    }

}

export default BasketView