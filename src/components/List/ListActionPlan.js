import React, { Component } from 'react'


class ListActionPlan extends Component {



    render() {

        return (
            <li>
                <time className="cbp_tmtime" datetime="09:30"><span>{this.props.action_plan.action_plan_time_info}</span><span></span>
                </time>
                <div className="cbp_tmicon">
                {this.props.index + 1}
									</div>
                <div className="cbp_tmlabel">
                    <h4>{this.props.action_plan.action_plan_description}</h4>
                </div>
            </li>
        )
    }

}

export default ListActionPlan