import React from 'react'
import { getTranslatedString } from '../../controllers/controller'

const ContactPageTitle = () => {
	return (
		<section class="hero_in tours_detail start_bg_zoom">
			<div class="wrapper">
				<div class="container">
					<h1 class="fadeInUp animated"><span></span>{getTranslatedString('contact')}</h1>
				</div>
			
			</div>
		</section>
	)
}

export default ContactPageTitle