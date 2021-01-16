import React from 'react'
import ButtonGroupShareActivity from '../ButtonGroup/ButtonGroupShareActivity'
import FormAddToBasket from '../Form/FormAddToBasket'
import FormLeaveReview from '../Form/FormLeaveReview'
import SectionActivityDetailDescription from './SectionActivityDetailDescription'
import SectionActivityDetailReview from './SectionActivityDetailReview'

const SectionActivityDetailContent = () => {
	return (
		<div class="container margin_60_35">
			<div class="row">
				<div class="col-lg-8">
					
					<SectionActivityDetailDescription />
					<SectionActivityDetailReview />

					<hr></hr>

					<div class="add-review">
						<h6>Bu aktiviteye katıldınız mı?</h6>
						<h5>Değerlendirme Bırakın</h5>
						<FormLeaveReview />
					</div>
				</div>

				<aside class="col-lg-4" id="sidebar">
					<FormAddToBasket />
					<ButtonGroupShareActivity />
					
				</aside>
			</div>
		</div>
	)
}

export default SectionActivityDetailContent