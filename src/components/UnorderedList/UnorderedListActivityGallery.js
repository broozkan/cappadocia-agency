import React from 'react'
import { Component } from 'react';
import { ActivityDetailContext } from '../../contexts/site/ActivityDetailContext';
import { CommonContext } from '../../contexts/site/CommonContext';
import ListActionPlan from '../List/ListActionPlan';
import ListActivityMedia from '../List/ListActivityMedia';


class UnorderedListActivityGallery extends Component {

    static contextType = CommonContext

    render() {

        // render action plans
        let activityMediaListHtml = ''
        if (this.context.isActivityLoaded) {
            activityMediaListHtml = this.context.activity.activity_photos.map((item,index) => {
                return(
                   <ListActivityMedia activity={item} />
   
               )
           })
        }
           
        
        

        return (
            <ul className="magnific-gallery">
                {activityMediaListHtml}
            </ul>


        )
    }
}

export default UnorderedListActivityGallery