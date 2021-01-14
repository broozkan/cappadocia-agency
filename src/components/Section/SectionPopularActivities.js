import React from 'react'
import ActivityItem from '../Item/ActivityItem'
import HotelItem from '../Item/HotelItem'



const SectionPopularActivities = () => {

    return (
        <section class="add_bottom_45">
            <div class="main_title_3">
                <span><em></em></span>
                <h2>Popüler Aktiviteler</h2>
                <p>Farklı aktiviteleri bir araya getirin</p>
            </div>
            <div class="row">

                <ActivityItem />
                <ActivityItem />
                <ActivityItem />
                <ActivityItem />
            </div>
            <a href="hotels-grid-isotope.html"><strong>Tümünü Gör (25) <i class="arrow_carrot-right"></i></strong></a>
            
        </section>
    )
}

export default SectionPopularActivities