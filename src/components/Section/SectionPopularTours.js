import React, { Component } from 'react'
import api from '../../services/api'
import TourItem from '../Item/TourItem'
import OwlCarousel from "react-owl-carousel";
import { getTranslatedString } from '../../controllers/controller';


class SectionPopularTours extends Component {

    constructor() {
        super()

        this.state = {
            activities: [],
            is_activities_loaded: false
        }
    }


    async componentDidMount() {
        const activities = await api.get('/activity/list/1', { params: { activity_language: localStorage.getItem('language') } })
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
        // render activities




        return (
            <div className="container container-custom margin_80_0">
                <div className="main_title_2">
                    <span><em></em></span>
                    <h2>{getTranslatedString('popular_tours_h2')}</h2>
                    <p>{getTranslatedString('popular_tours_p')}</p>
                </div>
                {carouselHtml}
                <p className="btn_home_align"><a href="/seferler?category_id=601b0f2d73ffa82ce46161f4&adult_count=1&child_count=0" className="btn_1 rounded">{getTranslatedString('popular_tours_link')}</a></p>
                <hr className="large"></hr>
            </div>
        )
    }

}

export default SectionPopularTours