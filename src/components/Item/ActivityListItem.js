import React from 'react'
import img from '../../images/tour_3.jpg'
import ElementPrice from '../Element/ElementPrice'
import ElementScore from '../Element/ElementScore'

const ActivityListItem = () => {

    return (
        <div class="box_list isotope-item popular">
        <div class="row no-gutters">
            <div class="col-lg-5">
                <figure>
                    <small>BALON TURLARI</small>
                    <a href="tour-detail.html"><img src={img} class="img-fluid" alt="" width="800" height="533" /><div class="read_more"><span>Read more</span></div></a>
                </figure>
            </div>
            <div class="col-lg-7">
                <div class="wrapper">
                    <a href="#0" class="wish_bt"></a>
                    <h3><a href="tour-detail.html">Standart Balon Turu</a></h3>
                    <p>Ödemenizi yaptıktan sonra müsaitlik durumuna göre konfirme gerçekleştirilecektir.</p>
                    <ElementPrice />
                </div>
                <ul>
                    <li><i class="icon_clock_alt"></i> 1s 30dk</li>
                    <li>
                        <ElementScore />
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default ActivityListItem