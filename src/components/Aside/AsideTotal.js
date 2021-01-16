import React from 'react'


const AsideTotal = () => {
    return(
        <aside class="col-lg-4" id="sidebar">
                                <div class="box_detail">
                                    <div id="total_cart">
                                        Toplam <span class="float-right">500 €</span>
                                    </div>
                                    <a href="cart-2.html" class="btn_1 full-width purchase">Ödeme Sayfasına Git</a>
                                    <div class="text-center"><small>Bu adımda ücret alınmayacaktır</small></div>
                                </div>
                            </aside>
    )
}

export default AsideTotal