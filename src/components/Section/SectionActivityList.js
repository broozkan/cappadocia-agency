import React from 'react'
import ActivityListItem from '../Item/ActivityListItem'


const SectionActivityList = () => {
    return(
		<div className="col-lg-9" id="list_sidebar">
			<div className="isotope-wrapper">
				<ActivityListItem />
				<ActivityListItem />
				<ActivityListItem />
				<ActivityListItem />
				<ActivityListItem />
				<ActivityListItem />
			</div>
		</div>
    )
}

export default SectionActivityList