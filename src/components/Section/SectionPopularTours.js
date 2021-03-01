import React, { Component } from 'react'
import api from '../../services/api'
import TourItem from '../Item/TourItem'
import OwlCarousel from "react-owl-carousel";


class SectionPopularTours extends Component {

    constructor() {
        super()

        this.state = {
            activities: [],
            is_activities_loaded: false
        }
    }


    async componentDidMount() {
        const activities = await api.get('/activity/list/1', {})

        this.setState({
            activities: activities.data.docs,
            is_activities_loaded: true
        })
    }

    render() {

        // render activities
        let activitiesHtml = ''
        let carouselHtml = ''
        if (this.state.is_activities_loaded) {
            activitiesHtml = this.state.activities.map((item) => {
                return (
                    <TourItem activity={item} />
                )
            })

            if (activitiesHtml != '') {
                const responsive = {
                    0: {
                        items: 1,
                    },
                    450: {
                        items: 2,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 4,
                    }
                }
                carouselHtml = (
                    <OwlCarousel className="owl-theme"
                        loop={true}
                        margin={20}
                        nav={false}
                        dots={true}
                        autoplay={true}
                        autoplayTimeout={2000}
                        items={4}
                        responsive={responsive}
                    >
                        {activitiesHtml}
                    </OwlCarousel>
                )
            }
        }




        return (
            <div className="container container-custom margin_80_0">
                <div className="main_title_2">
                    <span><em></em></span>
                    <h2>Popüler Turlarımız</h2>
                    <p>En çok tercih edilen turlarımız</p>
                </div>
                {carouselHtml}
                <p className="btn_home_align"><a href="tours-grid-isotope.html" className="btn_1 rounded">Tüm turları gör</a></p>
                <hr className="large"></hr>
            </div>
        )
    }

}

export default SectionPopularTours