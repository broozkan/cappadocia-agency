import React, { useContext } from 'react'
import { Component } from 'react'
import { CommonContext } from '../../contexts/site/CommonContext'
import { getTranslatedString } from '../../controllers/controller'


class AsideTotal extends Component {


    static contextType = CommonContext

    constructor() {
        super()

    }


    render() {
        let totalFieldHtml = ''
        if (this.context.isPreReservationLoaded) {
            totalFieldHtml = this.context.preReservation.pre_reservation_total + " " + this.context.preReservation.pre_reservation_activity.activity_currency
        }

        return (
            <aside class="col-lg-12" id="sidebar">
                <div class="box_detail">
                    <h3 className="mt-1">{getTranslatedString('aside_total_h3')}</h3>
                    <div id="total_cart" >
                        {totalFieldHtml}
                    </div>
                    <button class="btn_1 full-width purchase" type="submit">{getTranslatedString('aside_total_a')}</button>
                    <div class="text-center"><small>{getTranslatedString('aside_total_a_description')}</small></div>
                </div>
            </aside>
        )
    }


}

export default AsideTotal