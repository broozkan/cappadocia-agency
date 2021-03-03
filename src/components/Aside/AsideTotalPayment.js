import React, { useContext } from 'react'
import { Component } from 'react'
import { CommonContext } from '../../contexts/site/CommonContext'
import { getTranslatedString } from '../../controllers/controller'


class AsideTotalPayment extends Component {

    static contextType = CommonContext

    constructor() {
        super()
    }



    render() {

        let totalFieldHtml = ''
        if (this.context.isPreReservationLoaded) {
            totalFieldHtml = this.context.preReservation.pre_reservation_total + ' ' + this.context.preReservation.pre_reservation_activity.activity_currency
        }

        return (
            <aside class="col-lg-4 aside-payment" id="sidebar">
                <div class="box_detail">
                    <h3 className="mt-1">{getTranslatedString('total')}</h3>
                    <div id="total_cart">
                        {totalFieldHtml}
                        <small>{getTranslatedString('tax_included')}</small>
                    </div>
                    <hr></hr>
                    <div class="form-group">
                        <label class="container_check"> <a target="_blank" href="/mesafeli-satis-sozlesmesi/">{getTranslatedString('form_payment_sale_contract_label_a')}</a> {getTranslatedString('form_payment_accept_contract')}
                            <input type="checkbox" checked="checked" disabled />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="form-group">
                        <label class="container_check"> <a target="_blank" href="/gizlilik-sozlesmesi/">{getTranslatedString('form_payment_privacy_policy_label_a')}</a> {getTranslatedString('form_payment_accept_contract')}
                            <input type="checkbox" checked="checked" disabled />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <input className="btn_1 full-width purchase" value={getTranslatedString('pay')} type="submit" />
                </div>
            </aside>
        )
    }

}

export default AsideTotalPayment