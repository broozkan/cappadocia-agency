import React from 'react'
import TourItem from '../Item/TourItem'


const SectionPopularTours = () => {

    return (
        <div class="container container-custom margin_80_0">
            <div class="main_title_2">
                <span><em></em></span>
                <h2>Popüler Turlarımız</h2>
                <p>En çok tercih edilen turlarımız</p>
            </div>
            <div id="reccomended" class="owl-carousel owl-theme">
                <TourItem />
                <TourItem />
                <TourItem />
                <TourItem />
                <TourItem />
                <TourItem />
            </div>
            <p class="btn_home_align"><a href="tours-grid-isotope.html" class="btn_1 rounded">Tüm turları gör</a></p>
            <hr class="large"></hr>
      </div>
    )
}

export default SectionPopularTours