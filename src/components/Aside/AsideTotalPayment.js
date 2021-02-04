import React, { useContext } from 'react'
import { CommonContext } from '../../contexts/site/CommonContext'


const AsideTotalPayment = () => {

    const commonContext = useContext(CommonContext)

    return (
        <aside class="col-lg-4" id="sidebar">
            <div class="box_detail">
            <h3 className="mt-1">Toplam Tutar</h3>
                <div id="total_cart">
                    {commonContext.state.basket_total_html}
                    <small>Vergiler dahil</small>
                </div>
                <input className="btn_1 full-width purchase" value="Ödeme Yap" type="submit" />
            </div>
        </aside>
    )
}

export default AsideTotalPayment