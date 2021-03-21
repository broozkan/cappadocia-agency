import React, { useContext } from 'react'
import { Component } from 'react'
import { ActivityDetailContext } from '../../contexts/site/ActivityDetailContext'
import { CommonContext } from '../../contexts/site/CommonContext'
import { getTranslatedString } from '../../controllers/controller'


class FormCheckAvailability extends Component {
	static contextType = CommonContext


	render() {

		let categoryId = ''

		if (this.context.activity != '') {
			categoryId = this.context.activity.activity_category[0]._id
		}


		var dtToday = new Date();

		var month = ("0" + (dtToday.getMonth() + 1)).slice(-2)
		var day = ("0" + dtToday.getDate()).slice(-2)
		var year = dtToday.getFullYear();

		var maxDate = year + '-' + month + '-' + day;
	


		return (
			<form method="GET" action="/seferler">
				<div class="box_detail booking">
					<div class="price">
						<span>{this.context.activity.activity_price} {this.context.activity.activity_currency} <small>{getTranslatedString('per_person')}</small></span>
					</div>
					<div class="form-group">
						<input class="form-control" type="hidden" name="category_id" value={categoryId} />
						<input class="form-control" min={maxDate} type="date" name="activity_checkout_date" placeholder="Tarih.." />
					</div>


					<button type="submit" class="btn_1 full-width purchase">{getTranslatedString('form_check_availability_button')}</button>
					<div class="text-center"><small>{getTranslatedString('aside_total_a_description')}</small></div>
				</div>
			</form>
		)




	}

}

export default FormCheckAvailability