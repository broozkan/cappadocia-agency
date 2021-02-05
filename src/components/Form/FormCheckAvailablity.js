import React, { useContext } from 'react'
import { Component } from 'react'
import { ActivityDetailContext } from '../../contexts/site/ActivityDetailContext'
import { CommonContext } from '../../contexts/site/CommonContext'


class FormCheckAvailability extends Component {
	static contextType = CommonContext


	render(){

		let categoryId = ''
		
		return (
			<form method="GET" action="/seferler">
				<div class="box_detail booking">
					<div class="price">
						<span>{this.context.activity.activity_price} {this.context.activity.activity_currency} <small>kişi başı</small></span>
					</div>
					<div class="form-group">
						<input class="form-control" type="hidden" name="category_id"  value={categoryId}/>
						<input class="form-control" type="date" name="activity_checkout_date" placeholder="Tarih.." />
					</div>
	
	
					<button type="submit" class="btn_1 full-width purchase">Uygunluk Durumunu Kontrol Et</button>
					<div class="text-center"><small>Bu adımda para alınmayacaktır</small></div>
				</div>
			</form>
		)
	}
	
}

export default FormCheckAvailability