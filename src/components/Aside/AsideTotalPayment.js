import React from 'react'


const AsideTotalPayment = () => {
    return(
        <aside class="col-lg-4" id="sidebar">
                                <div class="box_detail">
                                    <div id="total_cart">
                                        Toplam <span class="float-right">500 €</span>
                                    </div>
                                    <input className="btn_1 full-width purchase" value="Ödeme Yap" type="submit" />
                                </div>
                            </aside>
    )
}

export default AsideTotalPayment