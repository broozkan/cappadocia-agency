import React, { useContext } from 'react'
import { CommonContext } from '../../contexts/site/CommonContext'


const AsideTotal = () => {

    const commonContext = useContext(CommonContext)

    

    // render go to payment page button
    let paymentPageButtonHtml = ''
    
    if (commonContext.state.basket_items.length < 1) {
        paymentPageButtonHtml = (
            <a href="/" class="btn_1 full-width purchase">Sepetiniz boş :(</a>
        )
    }else{
        paymentPageButtonHtml = (
            <a href="/odeme" class="btn_1 full-width purchase">Ödeme Sayfasına Git</a>
        )
    }


    return (
        <aside class="col-lg-4" id="sidebar">
            <div class="box_detail">
                <h3 className="mt-1">Sepetinizin Toplamı</h3>
                <div id="total_cart" >
                    {commonContext.state.basket_total_html}
                </div>
                {paymentPageButtonHtml}
                <div class="text-center"><small>Bu adımda ücret alınmayacaktır</small></div>
            </div>
        </aside>
    )
}

export default AsideTotal