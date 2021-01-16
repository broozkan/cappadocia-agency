import React from 'react'
import AsideTotal from '../../components/Aside/AsideTotal'
import Footer from '../../components/Footer/Footer'
import BasketPageTitle from '../../components/PageTitle/BasketPageTitle'
import TableBasketItems from '../../components/Table/TableBasketItems'

const BasketView = () => {
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
                                    <div class="cart-options clearfix">
                                        
                                        <div class="float-right fix_mobile">
                                            <button type="button" class="btn_1 outline">Sepeti Güncelle</button>
                                        </div>
                                    </div>
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

export default BasketView