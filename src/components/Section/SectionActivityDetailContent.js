import { render } from '@testing-library/react'
import React, { useContext, useEffect, useState } from 'react'
import { Component } from 'react'
import { ActivityDetailContext } from '../../contexts/site/ActivityDetailContext'
import { CommonContext } from '../../contexts/site/CommonContext'
import { getTranslatedString } from '../../controllers/controller'
import ButtonGroupShareActivity from '../ButtonGroup/ButtonGroupShareActivity'
import FormCheckAvailability from '../Form/FormCheckAvailablity'
import FormLeaveReview from '../Form/FormLeaveReview'
import ReviewContainer from '../Review/ReviewContainer'
import UnorderedListActionPlan from '../UnorderedList/UnorderedListActionPlan'
import UnorderedListActivityGallery from '../UnorderedList/UnorderedListActivityGallery'
import UnorderedListAdditionalInformations from '../UnorderedList/UnorderedListAdditionalInformations'
import UnorderedListCancellationTerms from '../UnorderedList/UnorderedListCancellationTerms'
import SectionActivityDetailDescription from './SectionActivityDetailDescription'
import SectionActivityDetailReview from './SectionActivityDetailReview'
import SectionActivityGallery from './SectionActivityGallery'

class SectionActivityDetailContent extends Component {

	static contextType = CommonContext




	render() {



		return (
			<div class="container margin_60_35">
				<div class="row">
					<div class="col-lg-8 order-2">
						<div className="grid">
							<SectionActivityGallery />

						</div>

						<section id="description">
							<div dangerouslySetInnerHTML={{ __html: this.context.activity.activity_description }} />
							<br></br>
							<h5 className="mt-5">{getTranslatedString('cancellation')} &amp; {getTranslatedString('refund')} {getTranslatedString('informations')}</h5>
							<UnorderedListCancellationTerms />

							<h5 className="mt-5">{getTranslatedString('action')} {getTranslatedString('plan')}</h5>
							<UnorderedListActionPlan />

							<h5 className="mt-5">{getTranslatedString('additional')} {getTranslatedString('informations')}</h5>
							<UnorderedListAdditionalInformations />
						</section>
						<section id="reviews">
							<h2>{getTranslatedString('reviews')}</h2>
							<div class="reviews-container">
								<div class="row">
									<div class="col-lg-3">
										<div id="review_summary">
											<strong>{this.context.activity.activity_rating}</strong>
											<em>{this.context.activity.activity_rating_text}</em>
										</div>
									</div>
								</div>
							</div>

							<hr></hr>

						</section>

						<hr></hr>

						<div class="add-review">
							<h6>{getTranslatedString('activity_detail_attempt_question')}</h6>
							<h5>{getTranslatedString('activity_detail_leave_review')}</h5>
							<FormLeaveReview />

						</div>
					</div>

					<aside class="col-lg-4 order-1 order-md-2" id="sidebar">
						<FormCheckAvailability />
						<ButtonGroupShareActivity />

					</aside>
				</div>
			</div>
		)
	}


}

export default SectionActivityDetailContent