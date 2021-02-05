import React from 'react'
import { Component } from 'react';
import { ActivityDetailContext } from '../../contexts/site/ActivityDetailContext';
import { CommonContext } from '../../contexts/site/CommonContext';
import ListActionPlan from '../List/ListActionPlan';


class UnorderedListActionPlan extends Component {

    static contextType = CommonContext

    render() {

        // render action plans
        let actionPlanListHtml = ''
        if (this.context.isActivityLoaded) {
            actionPlanListHtml = this.context.activity.activity_action_plan.map((item,index) => {
                return(
                   <ListActionPlan action_plan={item} index={index} />
   
               )
           })
        }
           
        
        

        return (
            <ul className="cbp_tmtimeline">
                {actionPlanListHtml}
            </ul>


        )
    }
}

export default UnorderedListActionPlan