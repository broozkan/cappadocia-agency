import React, { Component, useState } from 'react'
import ElementPriceLarge from '../Element/ElementPriceLarge'
import ElementScore from '../Element/ElementScore'
import ElementViewCount from '../Element/ElementViewCount'
import img from '../../images/tour_2.jpg'
import api from '../../services/api'
import Swal from 'sweetalert2'
import { CommonContext } from '../../contexts/site/CommonContext'
import { ThemeProvider } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getTranslatedString } from '../../controllers/controller'

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

        if (!this.props.params.child_count) {
            this.props.params.child_count = 0
        }
        const preReservationTotal = (parseInt(this.props.params.adult_count) + parseInt(this.props.params.child_count)) * e.target.dataset.activity_price

        const preReservationData = {
            pre_reservation_activity: this.props.activity,
            pre_reservation_activity_date: this.props.params.activity_checkout_date,
            pre_reservation_adult_count: this.props.params.adult_count,
            pre_reservation_child_count: this.props.params.child_count,
            pre_reservation_activity_beginning_hour: e.target.dataset.beginning_hour,
            pre_reservation_activity_ending_hour: e.target.dataset.ending_hour,
            pre_reservation_total: preReservationTotal
        }


        localStorage.setItem('pre_reservation_data', JSON.stringify(preReservationData))



    }
    render() {


        // render quota informations
        let quotaInformationHtml = ''
        quotaInformationHtml = this.props.activity.activity_quota_informations.map((item) => {

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
                                            href={
                                                "/yolcu-formu/" + this.props.activity._id +
                                                "/" + item.quota_info_date +
                                                "/" + item.quota_info_beginning_hour + "/" +
                                                item.quota_info_ending_hour + "/" +
                                                this.props.params.adult_count + "/" +
                                                this.props.params.child_count + "/"
                                            }
                                            class="btn_2 rounded float-right">
                                            {getTranslatedString('booking_item_make_reservation')}
                                        </a>
                                        <h3><a href={"/aktivite/detay/?activity=" + this.props.activity._id}>{this.props.activity.activity_name}</a></h3>
                                        <p className="mb-3">{this.props.activity.activity_short_description} </p>

                                        <ul class="booking_list">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <li><strong> <span className="fa fa-calendar"></span> {getTranslatedString('booking_item_date')}</strong> {item.quota_info_date} / {item.quota_info_beginning_hour} - {item.quota_info_ending_hour}</li>
                                                    <li><strong> <span className="fa fa-users"></span> {getTranslatedString('booking_item_quota')}</strong> {item.quota} {getTranslatedString('booking_item_person')}</li>
                                                    <li className="float-left" > <a href={"/aktivite/detay/?activity=" + this.props.activity._id}>{getTranslatedString('tour_item_show_details')} <span className="fa fa-chevron-right"></span> </a></li>
                                                </div>
                                                <div className="col-lg-4">
                                                    <span class="price-lg"><strong>{this.props.activity.activity_price} {this.props.activity.activity_currency}</strong> / {getTranslatedString('per_person')}</span>
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