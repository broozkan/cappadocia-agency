import React, { Component } from 'react'
import api from '../../services/api'
import TourItem from '../Item/TourItem'


class SectionPopularTours extends Component {

    constructor(){
        super()

        this.state = {
            activities: []
        }
    }


    async componentDidMount(){
        const activities = await api.get('/activity/list/1',{})
       
        this.setState({
            activities: activities.data.docs
        })
    }

    render() {

        // render activities
        let activitiesHtml = this.state.activities.map((item) => {
            return(
                <TourItem activity={item} />
            )
        })

        return (
            <div class="container container-custom margin_80_0">
                <div class="main_title_2">
                    <span><em></em></span>
                    <h2>Popüler Turlarımız</h2>
                    <p>En çok tercih edilen turlarımız</p>
                </div>
                <div id="reccomended" class="owl-carousel owl-theme">
                    {activitiesHtml}
                </div>
                <p class="btn_home_align"><a href="tours-grid-isotope.html" class="btn_1 rounded">Tüm turları gör</a></p>
                <hr class="large"></hr>
            </div>
        )
    }

}

export default SectionPopularTours