import React, { Component } from 'react'
import BreadcrumbAdmin from '../../components/Breadcrumb/BreadcrumbAdmin'
import NavbarAdmin from '../../components/Navbar/NavbarAdmin'
import UnorderedListReservation from '../../components/UnorderedList/UnorderedListReservation'
import api from '../../services/api'

class ReservationDetailView extends Component {

    constructor() {
        super()

        this.state = {
            reservation: {},
            is_reservation_loaded: false
        }
    }


    async componentDidMount() {
        const reservation = await api.get(`/reservation/get/${this.props.match.params.reservationId}`)

        this.setState({
            reservation: reservation.data,
            is_reservation_loaded: true
        })

    }

    render() {

        // render reservation approvement state
        let reservationApprovementHtml = ''
        switch (this.state.reservation.reservation_verification) {
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



        let reservationDetailJsx = <span className="fa fa-3x fa-spinner fa-spin"></span>
        if (this.state.is_reservation_loaded) {
            reservationDetailJsx = (
                <div className="box_general">
                    <div class="header_box">
                        <h2 class="d-inline-block">Rezervasyon Detayı</h2>
                        <a href="/admin/rezervasyonlar" class="btn_2 gray approve float-right"><i class="fa fa-fw fa-plus-circle"></i> Rezervasyonlar</a>
                    </div>
                    <div className="list_general reviews">
                        <li>
                            <h4>
                                <a href={`/admin/rezervasyon/detay/${this.state.reservation._id}`}>
                                    {`${this.state.reservation.reservation.pre_reservation_passenger.contact_informations_name} `} {this.state.reservation.reservation.pre_reservation_passenger.contact_informations_surname}
                                </a>
                                {reservationApprovementHtml}
                            </h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul class="booking_list">
                                        <li><strong>Aktivite</strong> {this.state.reservation.reservation.pre_reservation_activity.activity_name}</li>
                                        <li><strong>Tarih</strong> {this.state.reservation.reservation.pre_reservation_activity_date} - {this.state.reservation.reservation.pre_reservation_activity_beginning_hour} / {this.state.reservation.reservation.pre_reservation_activity_ending_hour}</li>
                                        <li><strong>Tutar</strong> {this.state.reservation.reservation.pre_reservation_total} {this.state.reservation.reservation.pre_reservation_activity.activity_currency}</li>
                                        <li><strong>Yetişkin Sayısı</strong> {this.state.reservation.reservation.pre_reservation_adult_count}</li>
                                        <li><strong>Çocuk Sayısı</strong> {this.state.reservation.reservation.pre_reservation_child_count}</li>
                                        <li><strong>Ödeme Tipi</strong> {this.state.reservation.reservation_payment_method}</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <h5>Yolcu Bilgileri</h5>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>Abdulkadir Yağmur (E)</td>
                                                    <td>+905362127078</td>
                                                    <td>Filipinler</td>
                                                    <td>2021-03-26</td>
                                                </tr>
                                                <tr>
                                                    <td>Abdulkadir Yağmur (E)</td>
                                                    <td>+905362127078</td>
                                                    <td>Filipinler</td>
                                                    <td>2021-03-26</td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>

                            </div>

                        </li>
                    </div>
                </div>
            )
        }
        console.log(this.state);




        return (
            <>
                <NavbarAdmin />
                <BreadcrumbAdmin />
                {reservationDetailJsx}
            </>
        )
    }

}

export default ReservationDetailView