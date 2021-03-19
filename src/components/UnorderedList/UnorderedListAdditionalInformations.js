import React from 'react'
import { Component } from 'react';
import { ActivityDetailContext } from '../../contexts/site/ActivityDetailContext';
import { CommonContext } from '../../contexts/site/CommonContext';
import ListAdditionalInformation from '../List/ListAdditionalInformation';
import ListCancellationTerm from '../List/ListCancellationTerm';


class UnorderedListAdditionalInformations extends Component {

    static contextType = CommonContext

    render() {

        // render cancellation terms
        let additionalInformationsHtml = ''
        if (this.context.isActivityLoaded) {
            console.log(this.context.activity.activity_additional_informations);
            additionalInformationsHtml = this.context.activity.activity_additional_informations.map((item) => {

                return (
                    <ListAdditionalInformation additional_information={item} />
                )
            })
        }




        return (
            <ul className="cbp_tmtimeline">
                {additionalInformationsHtml}
            </ul>


        )
    }
}

export default UnorderedListAdditionalInformations