import React from 'react'
import { Component } from 'react';
import { ActivityDetailContext } from '../../contexts/site/ActivityDetailContext';
import { CommonContext } from '../../contexts/site/CommonContext';
import ListCancellationTerm from '../List/ListCancellationTerm';


class UnorderedListCancellationTerms extends Component {

    static contextType = CommonContext

    render() {

       // render cancellation terms
        let cancellationTermsHtml = ''
        if (this.context.isActivityLoaded) {
            console.log(this.context.activity.activity_cancellation_terms);
            cancellationTermsHtml = this.context.activity.activity_cancellation_terms.map((item) => {

				return(
						<ListCancellationTerm cancellation_term={item} />
				)
			})	
        }
			
		
        

        return (
            <ul className="cbp_tmtimeline">
                {cancellationTermsHtml}
            </ul>


        )
    }
}

export default UnorderedListCancellationTerms