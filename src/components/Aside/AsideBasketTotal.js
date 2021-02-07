import React, { useContext } from 'react'
import { Component } from 'react'
import { CommonContext } from '../../contexts/site/CommonContext'


class AsideTotal extends Component {


    static contextType = CommonContext

    constructor(){
        super()
      
    }


    render() {
        let totalFieldHtml = ''
        if (this.context.isPreReservationLoaded) {
            totalFieldHtml = this.context.preReservation.pre_reservation_total+" "+this.context.preReservation.pre_reservation_activity.activity_currency
        }

        return (
            <aside class="col-lg-12" id="sidebar">
                <div class="box_detail">
                    <h3 className="mt-1">Sepetinizin Toplamı</h3>
                    <div id="total_cart" >
                        {totalFieldHtml}
                    </div>
                    <button class="btn_1 full-width purchase" type="submit">Ödeme Sayfasına Git</button>
                    <div class="text-center"><small>Bu adımda ücret alınmayacaktır</small></div>
                </div>
            </aside>
        )
    }


}

export default AsideTotal