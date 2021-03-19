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
        console.log(this.props);




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


        // render adult passenger informations
        let reservationAdultPassengersJsx = ''
        reservationAdultPassengersJsx = this.props.reservation.reservation.pre_reservation_passenger.adult_passengers.map((item) => {
            let genderPrefix = '(E)'
            if (item.passenger_gender == "female") {
                genderPrefix = '(K)'
            }
            return (
                <tr>
                    <td>{item.passenger_name} {item.passenger_surname} {genderPrefix}</td>
                    <td>{item.passenger_id_number}</td>
                    <td>{item.passenger_phone_number}</td>
                    <td>{item.passneger_country}</td>
                </tr>
            )
        })

        // render child passenger informations
        let genderPrefix = ''
        if (this.props.reservation.reservation.pre_reservation_passenger.child_passenger_gender == "female") {
            genderPrefix = '(K)'
        } else if (this.props.reservation.reservation.pre_reservation_passenger.child_passenger_gender == "male") {
            genderPrefix = '(E)'
        }
        let reservationChildPassengersJsx = (
            <tr>
                <td>{this.props.reservation.reservation.pre_reservation_passenger.child_passenger_name} {this.props.reservation.reservation.pre_reservation_passenger.child_passenger_surname} {genderPrefix}</td>
                <td>{this.props.reservation.reservation.pre_reservation_passenger.child_passenger_id_number}</td>
                <td>{this.props.reservation.reservation.pre_reservation_passenger.child_passenger_country}</td>
            </tr>

        )


        // render contact informations

        let reservationContactInformationsJsx = (
            <tr>
                <td>{this.props.reservation.reservation.pre_reservation_passenger.contact_informations_name}</td>
                <td>{this.props.reservation.reservation.pre_reservation_passenger.contact_informations_id_number}</td>
                <td>{this.props.reservation.reservation.pre_reservation_passenger.contact_informations_phone_number}</td>
                <td>{this.props.reservation.reservation.pre_reservation_passenger.contact_informations_email_address}</td>
                <td>{this.props.reservation.reservation.pre_reservation_passenger.contact_informations_address}</td>
            </tr>

        )




        return (
            <li>
                <figure><img src={`${process.env.REACT_APP_API_ENDPOINT}file/${this.props.reservation.reservation.pre_reservation_activity.activity_photos[0].activity_photo_name}`} alt="" /></figure>
                <h4>
                    {`${this.props.reservation.reservation.pre_reservation_passenger.contact_informations_name} `} {this.props.reservation.reservation.pre_reservation_passenger.contact_informations_surname}

                    {reservationApprovementHtml}
                </h4>
                <div className="row">
                    <div className="col-lg-4">
                        <ul class="booking_list">
                            <li><strong>Aktivite</strong> {this.props.reservation.reservation.pre_reservation_activity.activity_name}</li>
                            <li><strong>Tarih</strong> {this.props.reservation.reservation.pre_reservation_activity_date} - {this.props.reservation.reservation.pre_reservation_activity_beginning_hour} / {this.props.reservation.reservation.pre_reservation_activity_ending_hour}</li>
                            <li><strong>Tutar</strong> {this.props.reservation.reservation.pre_reservation_total} {this.props.reservation.reservation.pre_reservation_activity.activity_currency}</li>
                            <li><strong>Yetişkin Sayısı</strong> {this.props.reservation.reservation.pre_reservation_adult_count}</li>
                            <li><strong>Çocuk Sayısı</strong> {this.props.reservation.reservation.pre_reservation_child_count}</li>
                            <li><strong>Ödeme Tipi</strong> {this.props.reservation.reservation_payment_method}</li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        <div className="table-responsive">
                            <h6>Yetişkin Yolcu Bilgileri</h6>
                            <table className="table">
                                <tbody>
                                    {reservationAdultPassengersJsx}
                                </tbody>
                            </table>
                        </div>
                        <div className="table-responsive">
                            <h6>Çocuk Yolcu Bilgileri</h6>
                            <table className="table">
                                <tbody>
                                    {reservationChildPassengersJsx}
                                </tbody>
                            </table>
                        </div>
                        <div className="table-responsive">
                            <h6>İletişim Bilgileri</h6>
                            <table className="table">
                                <tbody>
                                    {reservationContactInformationsJsx}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                <ul class="buttons">
                    <li><a href="#0" class="btn_1 gray approve" data-id={this.props.reservation._id} onClick={this.handleApproveReservationClick} ><i class="fa fa-check-circle"></i> Onayla</a></li>
                    <li><a href="#0" class="btn_1 gray delete" data-id={this.props.reservation._id} onClick={this.handleCancelReservationClick}><i class="fa fa-fw fa-times-circle"></i> İptal Et</a></li>
                </ul>
            </li>
        )
    }

}

export default ListReservation