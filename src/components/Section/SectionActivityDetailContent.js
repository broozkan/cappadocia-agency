import { render } from '@testing-library/react'
import React, { useContext, useEffect, useState } from 'react'
import { Component } from 'react'
import { ActivityDetailContext } from '../../contexts/site/ActivityDetailContext'
import { CommonContext } from '../../contexts/site/CommonContext'
import ButtonGroupShareActivity from '../ButtonGroup/ButtonGroupShareActivity'
import FormCheckAvailability from '../Form/FormCheckAvailablity'
import FormLeaveReview from '../Form/FormLeaveReview'
import ReviewContainer from '../Review/ReviewContainer'
import UnorderedListActionPlan from '../UnorderedList/UnorderedListActionPlan'
import UnorderedListCancellationTerms from '../UnorderedList/UnorderedListCancellationTerms'
import SectionActivityDetailDescription from './SectionActivityDetailDescription'
import SectionActivityDetailReview from './SectionActivityDetailReview'

class SectionActivityDetailContent extends Component {

	static contextType = CommonContext




	render() {

		console.log(this.context);
		// render comment form
		let commentFormHtml = ''
		if (this.context.state.is_user_logged_in) {
			commentFormHtml = (
				<>
					<FormLeaveReview />
				</>
			)
		} else {
			commentFormHtml = (
				<>
					<p>Yorumunuz bizim için önemli. Fakat yorum yapabilmek için <a href="#">giriş yapmalısınız.</a> </p>
				</>
			)
		}


		return (
			<div class="container margin_60_35">
				<div class="row">
					<div class="col-lg-8">

						<section id="description">
							<div dangerouslySetInnerHTML={{ __html: this.context.activity.activity_description }} />
							<br></br>
							<h5 className="mt-5">İptal &amp; İade Bilgileri</h5>
							<UnorderedListCancellationTerms />

							<h5 className="mt-5">Hareket Bilgileri</h5>
							<UnorderedListActionPlan />
						</section>
						<section id="reviews">
							<h2>Değerlendirmeler</h2>
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
							<h6>Bu aktiviteye katıldınız mı?</h6>
							<h5>Değerlendirme Bırakın</h5>
							{commentFormHtml}
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


}

export default SectionActivityDetailContent