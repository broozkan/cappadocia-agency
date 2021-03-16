import React from 'react'
import { getTranslatedString } from '../../controllers/controller'


const SectionParallax = () => {
	return (
		<div class="call_section">
			<div class="container clearfix">
				<div class="col-lg-5 col-md-6 float-right wow" data-wow-offset="250">
					<div class="block-reveal">
						<div class="block-vertical"></div>
						<div class="box_1">
							<h3>{getTranslatedString('parallax_h3')}</h3>
							<p>{getTranslatedString('parallax_p')} </p>
							<a href="tel:+905362127078" class="btn_1 rounded">{getTranslatedString('parallax_call')}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SectionParallax