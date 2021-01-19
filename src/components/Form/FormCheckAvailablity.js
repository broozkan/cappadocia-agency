import React from 'react'
import ElementScore from '../Element/ElementScore'


const FormCheckAvailability = () => {
	return (
		<form>
			<div class="box_detail booking">
				<div class="price">
					<span>45 € <small>kişi başı</small></span>
					<ElementScore />
				</div>
				<div class="form-group">
					<input class="form-control" type="date" placeholder="Tarih.." />
				</div>

				<a href="/seferler" class="btn_1 full-width purchase">Uygunluk Durumunu Kontrol Et</a>
				<div class="text-center"><small>Bu adımda para alınmayacaktır</small></div>
			</div>
		</form>
	)
}

export default FormCheckAvailability