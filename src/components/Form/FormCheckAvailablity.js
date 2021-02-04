import React, { useContext } from 'react'
import { ActivityDetailContext } from '../../contexts/site/ActivityDetailContext'
import ElementScore from '../Element/ElementScore'


const FormCheckAvailability = () => {

	const activityDetailContext = useContext(ActivityDetailContext)

	return (
		<form method="GET" action="/seferler">
			<div class="box_detail booking">
				<div class="price">
					<span>{activityDetailContext.activity.activity_price} $ <small>kişi başı</small></span>
					<ElementScore />
				</div>
				<div class="form-group">
					<input class="form-control" type="hidden" name="activity_id" value={activityDetailContext.activity._id} />
					<input class="form-control" type="date" name="activity_checkout_date" placeholder="Tarih.." />
				</div>


				<button type="submit" class="btn_1 full-width purchase">Uygunluk Durumunu Kontrol Et</button>
				<div class="text-center"><small>Bu adımda para alınmayacaktır</small></div>
			</div>
		</form>
	)
}

export default FormCheckAvailability