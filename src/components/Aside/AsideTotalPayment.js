import React, { useContext } from 'react'
import { Component } from 'react'
import { CommonContext } from '../../contexts/site/CommonContext'


class AsideTotalPayment extends Component {

    static contextType = CommonContext

    constructor(){
        super()
    }



    render() {

        let totalFieldHtml = ''
        if (this.context.isPreReservationLoaded) {
            totalFieldHtml = this.context.preReservation.pre_reservation_total+' '+this.context.preReservation.pre_reservation_activity.activity_currency
        }

        return (
            <aside class="col-lg-4 aside-payment" id="sidebar">
                <div class="box_detail">
                    <h3 className="mt-1">Toplam Tutar</h3>
                    <div id="total_cart">
                        {totalFieldHtml}
                        <small>Vergiler dahil</small>
                    </div>
                    <hr></hr>
                    <div class="form-group">
                        <label class="container_check"> <a target="_blank" href="/mesafeli-satis-sozlesmesi/">Mesafeli satış sözleşmesini</a> okudum, kabul ediyorum
                        <input type="checkbox" checked="checked" disabled />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="form-group">
                        <label class="container_check"> <a target="_blank" href="/gizlilik-sozlesmesi/">Gizlilik sözleşmesini</a> okudum, kabul ediyorum
                        <input type="checkbox" checked="checked" disabled />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <input className="btn_1 full-width purchase" value="Ödeme Yap" type="submit" />
                </div>
            </aside>
        )
    }

}

export default AsideTotalPayment