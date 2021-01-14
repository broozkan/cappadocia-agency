import React from 'react'
import img from '../../images/hotel_1.jpg'

const HotelItem = () => {

    return(
        <div class="col-xl-3 col-lg-6 col-md-6">
            <a href="hotel-detail.html" class="grid_item">
                <figure>
                    <div class="score"><strong>8.9</strong></div>
                    <img src={img} class="img-fluid" alt="" />
                    <div class="info">
                        <div class="cat_star"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i></div>
                        <h3>Kapadokya Otel</h3>
                    </div>
                </figure>
            </a>
        </div>
    )
}

export default HotelItem