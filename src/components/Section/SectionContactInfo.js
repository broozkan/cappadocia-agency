import React from 'react'
import { getTranslatedString } from '../../controllers/controller'

const SectionContactInfo = () => {
	return (
		<div class="contact_info">
			<div class="container">
				<ul class="clearfix">
					<li>
						<i class="pe-7s-map-marker"></i>
						<h4>{getTranslatedString('address')}</h4>
						<span>Yahya Bey Cad. 58-48. Sk.<br></br>Ürgüp - Nevşehir</span>
					</li>
					<li>
						<i class="pe-7s-mail-open-file"></i>
						<h4>{getTranslatedString('email_address')}</h4>
						<span>info@turkeyballoonscappadocia.com</span>

					</li>
					<li>
						<i class="pe-7s-phone"></i>
						<h4>{getTranslatedString('phone_number')}</h4>
						<span>+ 90 (536) 212 70 78<br></br><small>{getTranslatedString('monday')} / {getTranslatedString('sunday')} 09:00 - 20:00</small></span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default SectionContactInfo