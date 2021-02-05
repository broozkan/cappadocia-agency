import React, { Component, useState } from 'react'
import ElementPriceLarge from '../Element/ElementPriceLarge'
import ElementScore from '../Element/ElementScore'
import ElementViewCount from '../Element/ElementViewCount'
import img from '../../images/tour_2.jpg'
import api from '../../services/api'
import Swal from 'sweetalert2'
import { CommonContext } from '../../contexts/site/CommonContext'

class BookingItem extends Component {

    static contextType = CommonContext

    constructor() {
        super()

        this.state = {
            reservated_activity_beginning_hour: '',
            reservated_activity_ending_hour: ''
        }

        this.handleOnClickAddToBasket = this.handleOnClickAddToBasket.bind(this)
    }


    handleOnClickAddToBasket = async (e) => {
        e.preventDefault()

        if (!this.context.state.is_user_logged_in) {
            this.context.updateState("login_modal_visibility", true, () => { })
        } else {
            const basketTotal = (parseInt(this.props.params.mature_count) + parseInt(this.props.params.child_count)) * e.target.dataset.activity_price

            const basketData = {
                basket_activity: this.props.activity,
                basket_activity_date: this.props.params.activity_checkout_date,
                basket_mature_count: this.props.params.mature_count,
                basket_child_count: this.props.params.child_count,
                basket_activity_beginning_hour: e.target.dataset.beginning_hour,
                basket_activity_ending_hour: e.target.dataset.ending_hour,
                basket_total: basketTotal
            }

            const submitResponse = await api.post('/basket/new/', basketData)

            if (submitResponse.data.response) {
                Swal.fire({
                    title: "Başarılı",
                    text: "Sepetinize eklendi",
                    icon: "success"
                })

                this.setState({
                    reservated_activity_beginning_hour: basketData.basket_activity_beginning_hour,
                    reservated_activity_ending_hour: basketData.basket_activity_ending_hour
                })
            } else {
                Swal.fire({
                    title: "Hata",
                    text: submitResponse.data.responseData,
                    icon: "error"
                })
            }
        }




    }
    render() {
        // render quota informations
        let quotaInformationHtml = ''
        quotaInformationHtml = this.props.activity.activity_quota_informations.map((item) => {
            let reservationButtonText = 'Rezervasyon Yap'
            let reservationButtonClass = 'btn_2'
            if (this.state.reservated_activity_beginning_hour == item.quota_info_beginning_hour && this.state.reservated_activity_ending_hour == item.quota_info_ending_hour) {
                reservationButtonText = (
                    <>
                        <span className="fa fa-check"></span> Sepete Eklendi
                    </>
                )
                reservationButtonClass = 'btn_1'
            }

            if (item.quota_info_date == this.props.params.activity_checkout_date) {
                return (
                    <>

                        <div class="box_list isotope-item popular">
                            <div class="row no-gutters">
                                <div class="col-lg-5">
                                    <figure>
                                        <small>{this.props.activity.activity_category[0].category_name}</small>
                                        <a href={"/aktivite/detay/?activity=" + this.props.activity._id}><img src={process.env.REACT_APP_API_ENDPOINT + 'file/' + this.props.activity.activity_photos[0].activity_photo_name} class="img-fluid" alt="" width="800" height="533" /><div class="read_more"><span>Detay Gör</span></div></a>
                                    </figure>
                                </div>
                                <div class="col-lg-7">
                                    <div class="wrapper">
                                        <a
                                            data-activity_id={this.props.activity._id}
                                            data-beginning_hour={item.quota_info_beginning_hour}
                                            data-ending_hour={item.quota_info_ending_hour}
                                            data-activity_price={this.props.activity.activity_price}
                                            onClick={this.handleOnClickAddToBasket}
                                            class={reservationButtonClass + " rounded float-right"}>
                                            {reservationButtonText}
                                        </a>
                                        <h3><a href={"/aktivite/detay/?activity=" + this.props.activity._id}>{this.props.activity.activity_name}</a></h3>
                                        <p className="mb-3">{this.props.activity.activity_short_description} </p>

                                        <ul class="booking_list">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <li><strong> <span className="fa fa-calendar"></span> Tarih</strong> {item.quota_info_date} / {item.quota_info_beginning_hour} - {item.quota_info_ending_hour}</li>
                                                    <li><strong> <span className="fa fa-users"></span> Kontenjan</strong> {item.quota} kişi</li>
                                                    <li className="float-left" > <a href={"/aktivite/detay/?activity=" + this.props.activity._id}>Tüm özellikler <span className="fa fa-chevron-right"></span> </a></li>
                                                </div>
                                                <div className="col-lg-4">
                                                    <span class="price-lg"><strong>{this.props.activity.activity_price} {this.props.activity.activity_currency}</strong> / kişi başı</span>
                                                </div>
                                            </div>

                                        </ul>
                                    </div>
                                    <ul className="box_list_footer">
                                        <li>
                                            <i class="ti-eye"></i> {this.props.activity.activity_view_count} görüntülenme
                     </li>
                                        <li>
                                            <div class="score">
                                                <span>
                                                    {this.props.activity.activity_rating_text}
                                                </span>
                                                <strong>{this.props.activity.activity_rating}</strong>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </>

                )
            }
        })


        return (
            <>
                {quotaInformationHtml}
            </>
        )
    }

}

export default BookingItem