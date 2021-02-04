import React, { useContext, useEffect, useState } from 'react'
import { ActivityDetailContext } from '../../contexts/site/ActivityDetailContext'
import ButtonGroupShareActivity from '../ButtonGroup/ButtonGroupShareActivity'
import FormCheckAvailability from '../Form/FormCheckAvailablity'
import FormLeaveReview from '../Form/FormLeaveReview'
import SectionActivityDetailDescription from './SectionActivityDetailDescription'
import SectionActivityDetailReview from './SectionActivityDetailReview'

const SectionActivityDetailContent = (props) => {

	const activityContextValue = useContext(ActivityDetailContext)



	return (
		<div class="container margin_60_35">
			<div class="row">
				<div class="col-lg-8">

					<section id="description">
						<div dangerouslySetInnerHTML={{ __html: activityContextValue.activity.activity_description }} />

					</section>
					<SectionActivityDetailReview />

					<hr></hr>

					<div class="add-review">
						<h6>Bu aktiviteye katıldınız mı?</h6>
						<h5>Değerlendirme Bırakın</h5>
						<FormLeaveReview />
					</div>
				</div>

				<aside class="col-lg-4" id="sidebar">
					<FormCheckAvailability />
					<ButtonGroupShareActivity />

				</aside>
			</div>
		</div>
	)
}

export default SectionActivityDetailContent