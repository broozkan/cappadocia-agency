import React from 'react'
import ElementPriceLarge from '../Element/ElementPriceLarge'
import ElementScore from '../Element/ElementScore'
import ElementViewCount from '../Element/ElementViewCount'
import img from '../../images/tour_2.jpg'

const BookingItem = () => {

    return (
        <div class="box_list isotope-item popular">
            <div class="row no-gutters">
                <div class="col-lg-5">
                    <figure>
                        <small>BALON TURLARI</small>
                        <a href="hotel-detail.html"><img src={img} class="img-fluid" alt="" width="800" height="533" /><div class="read_more"><span>Detay Gör</span></div></a>
                    </figure>
                </div>
                <div class="col-lg-7">
                    <div class="wrapper">
                        <a href="/sepet" class="btn_2 rounded float-right">Rezervasyon Yap</a>
                        <h3><a href="hotel-detail.html">Standart Balon Turu</a></h3>
                        <p className="mb-3">Balon turuna ait kısa açıklamanın olduğu yer Balon turuna ait kısa </p>

                        <ul class="booking_list">
                            <div className="row">
                                <div className="col-lg-8">
                                    <li><strong> <span className="fa fa-calendar"></span> Tarih</strong> 11.12.2017 / 09:00 - 10:30</li>
                                    <li><strong> <span className="fa fa-users"></span> Kontenjan</strong> 5 kişi</li>
                                    <li className="float-left" > <a href="#">Tüm özellikler <span className="fa fa-chevron-right"></span> </a></li>
                                </div>
                                <div className="col-lg-4">
                                    <ElementPriceLarge />
                                </div>
                            </div>

                        </ul>
                    </div>
                    <ul className="box_list_footer">
                        <li>
                            <ElementViewCount />
                        </li>
                        <li>
                            <ElementScore />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BookingItem