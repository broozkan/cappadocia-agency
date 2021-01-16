import React from 'react'
import img from '../../images/tour_2.jpg'
import ElementPrice from '../Element/ElementPrice'

const TourItem = () => {

    return(
        <div class="item">
        <div class="box_grid">
          <figure>
            <a href="#0" class="wish_bt"></a>
            <a href="tour-detail.html"><img src={img} class="img-fluid" alt="" width="800" height="533" />
            <div class="read_more">
                <span>Detaylı İncele</span>
                </div>
                </a>
            <small>Balon Turları</small>
          </figure>
          <div class="wrapper">
            <h3><a href="tour-detail.html">Standart Balon Turu</a></h3>
            <p>Ödemenizi yaptıktan sonra müsaitlik durumuna göre konfirme gerçekleştirilecektir.</p>
            <ElementPrice />
          </div>
          <ul>
            <li><i class="icon_clock_alt"></i> 1s 30dk</li>
            <li><div class="score"><span>Çok İyi<em>350 Değerlendirme</em></span><strong>9.0</strong></div></li>
          </ul>
        </div>
      </div>
    )
}

export default TourItem