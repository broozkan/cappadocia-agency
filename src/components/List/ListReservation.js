import React, { Component } from 'react'
import Swal from 'sweetalert2'
import api from '../../services/api'


class ListReservation extends Component {


    constructor() {
        super()

        this.handleApproveReservationClick = this.handleApproveReservationClick.bind(this)
        this.handleCancelReservationClick = this.handleCancelReservationClick.bind(this)
    }


    async handleApproveReservationClick(e) {

        const submitResponse = await api.post('/reservation/approve-reservation/' + e.target.dataset.id)

        if (submitResponse.data.response) {
            Swal.fire({
                title: 'Başarılı',
                text: 'Rezervasyon onaylandı',
                icon: 'success'
            })
            this.props.getReservations()
        } else {
            Swal.fire({
                title: 'Hata',
                text: submitResponse.data.responseData,
                icon: 'error'
            })
        }


    }


    async handleCancelReservationClick(e) {
        

        const submitResponse = await api.post('/reservation/cancel-reservation/' + e.target.dataset.id)

        if (submitResponse.data.response) {
            Swal.fire({
                title: 'Başarılı',
                text: 'Rezervasyon iptal edildi',
                icon: 'success'
            })
            this.props.getReservations()
        } else {
            Swal.fire({
                title: 'Hata',
                text: submitResponse.data.responseData,
                icon: 'error'
            })
        }


    }

    render() {


        // render reservation acctivity content
        let reservationActivityContentHtml = this.props.reservation.reservation_basket.map((item) => {

            return (
                <>
                    <li><strong>Aktivite</strong> {item.basket_activity[0].activity_name}</li>
                    <li><strong>Tarih</strong> {item.basket_activity_date} - {item.basket_activity_beginning_hour} / {item.basket_activity_ending_hour}</li>
                    <li><strong>Tutar</strong> {item.basket_total} {item.basket_activity[0].activity_currency}</li>
                    <li><strong>Yetişkin Sayısı</strong> {item.basket_mature_count}</li>
                    <li><strong>Çocuk Sayısı</strong> {item.basket_child_count}</li>
                    <hr></hr>
                </>

            )
        })




        // render reservation method name
        let reservationMethodNameHtml = ''
        if (this.props.reservation.reservation_payment_method === "cash") {
            reservationMethodNameHtml = "Nakit"
        } else {
            reservationMethodNameHtml = "Online Ödeme"
        }


        // render reservation approvement state
        let reservationApprovementHtml = ''
        switch (this.props.reservation.reservation_verification) {
            case "pending":
                reservationApprovementHtml = <i class="pending">Onay Bekliyor</i>
                break;
            case "approved":
                reservationApprovementHtml = <i class="approved">Onaylandı</i>
                break;
            case "cancelled":
                reservationApprovementHtml = <i class="cancel">İptal Edildi</i>
                break;
            default:
                break;
        }

        return (
            <li>
                <figure><img src="/img/hotel_1.jpg" alt="" /></figure>
                <h4>{"Burhan Özkan"} {reservationApprovementHtml}</h4>
                <ul class="booking_list">
                    {reservationActivityContentHtml}
                    <li><strong>Toplam Tutar</strong> 200 €</li>
                    <li><strong>Ödeme Tipi</strong> {reservationMethodNameHtml}</li>
                </ul>
                <p><a href="#0" class="btn_1 gray"><i class="fa fa-fw fa-envelope"></i> Sms Gönder</a></p>
                <ul class="buttons">
                    <li><a href="#0" class="btn_1 gray approve" data-id={this.props.reservation._id} onClick={this.handleApproveReservationClick} ><i class="fa fa-fw fa-check-circle-o"></i> Onayla</a></li>
                    <li><a href="#0" class="btn_1 gray delete" data-id={this.props.reservation._id} onClick={this.handleCancelReservationClick}><i class="fa fa-fw fa-times-circle-o"></i> İptal Et</a></li>
                </ul>
            </li>
        )
    }

}

export default ListReservation