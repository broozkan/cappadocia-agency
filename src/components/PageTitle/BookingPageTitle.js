import React from 'react'
import { getTranslatedString } from '../../controllers/controller'

const BookingPageTitle = () => {
	return (
		<section class="hero_in tours_detail start_bg_zoom">
			<div class="wrapper">
				<div class="container">
					<h1 class="fadeInUp animated"><span></span>{getTranslatedString('booking_page_title')}</h1>
				</div>

			</div>
		</section>
	)
}

export default BookingPageTitle