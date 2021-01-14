import React from 'react'
import HotelItem from '../Item/HotelItem'
import SectionAdventureBanner from './SectionAdventureBanner'
import SectionPopularActivities from './SectionPopularActivities'



const SectionPopularHotels = () => {

    return (
        <div class="container container-custom margin_30_95">
            <section class="add_bottom_45">
                <div class="main_title_3">
                    <span><em></em></span>
                    <h2>Popüler Otel ve Konaklamalar</h2>
                    <p>Eşsiz kapadokya manzaralı, yüksek konforlu konaklama tercihleri</p>
                </div>
                <div class="row">

                    <HotelItem />
                    <HotelItem />
                    <HotelItem />
                    <HotelItem />
                </div>
                <a href="hotels-grid-isotope.html"><strong>Tümünü Gör (15) <i class="arrow_carrot-right"></i></strong></a>
            </section>
            <SectionPopularActivities />
            <SectionAdventureBanner />

        </div>
    )
}

export default SectionPopularHotels