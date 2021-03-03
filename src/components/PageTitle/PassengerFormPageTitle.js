import React from 'react'
import { getTranslatedString } from '../../controllers/controller'

const PassengerFormPageTitle = () => {
	return (
		<section class="hero_in tours_detail start_bg_zoom">
			<div class="wrapper">
				<div class="container">
					<h1 class="fadeInUp animated"><span></span>{getTranslatedString('passenger')} {getTranslatedString('informations')}</h1>
				</div>

			</div>
		</section>
	)
}

export default PassengerFormPageTitle