import React, { Component, useContext } from 'react'
import api from '../../services/api'
import TourItem from '../Item/TourItem'
import OwlCarousel from "react-owl-carousel";
import { getTranslatedString } from '../../controllers/controller';
import { CommonContext } from '../../contexts/site/CommonContext';


class SectionActivityGallery extends Component {

    static contextType = CommonContext




    render() {
        console.log(this.context);
        // render activities
        let activityMediaListHtml = ''
        let carouselHtml = ''
        if (this.context.isActivityLoaded) {
            activityMediaListHtml = this.context.activity.activity_photos.map((item, index) => {
                return (
                    <span className="magnific-gallery">
                        <a href={`${process.env.REACT_APP_API_ENDPOINT}file/${item.activity_photo_name}`} className="btn_photos" data-effect="mfp-zoom-in">
                            <img src={`${process.env.REACT_APP_API_ENDPOINT}file/${item.activity_photo_name}`} />
                        </a>
                    </span>

                )
            })

            const responsive = {
                0: {
                    items: 1,
                }
            }
            carouselHtml = (
                <OwlCarousel className="owl-theme"
                    loop={true}
                    margin={10}
                    nav={false}
                    dots={false}
                    autoplay={true}
                    autoplayTimeout={2000}
                    items={1}
                    responsive={responsive}
                >
                    {activityMediaListHtml}
                </OwlCarousel>
            )

        }




        return (
            <div className="">
                {carouselHtml}
                <hr className="large"></hr>
            </div>
        )
    }

}

export default SectionActivityGallery