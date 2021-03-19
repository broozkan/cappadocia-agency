import React, { Component } from 'react'
import api from '../../services/api'
import ElementScore from '../Element/ElementScore'


class FormFilterReservation extends Component {


	constructor() {
		super()

		this.state = {
			categories: [],
			is_categories_loaded: false,
			activities: [],
			is_activities_loaded: false,
			reservation_user_name: '',
			reservation_verification: '',
			reservation_activity_date: ''
		}


		this.handleOnChange = this.handleOnChange.bind(this)
		this.handleOnSubmit = this.handleOnSubmit.bind(this)
	}


	async componentDidMount() {
		const categories = await api.get('/category/list/1')
		const activities = await api.get('/activity/list/1')



		this.setState({
			categories: categories.data.docs,
			activities: activities.data.docs,
			is_categories_loaded: true,
			is_activities_loaded: true
		})


	}


	handleOnChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleOnSubmit(e) {
		e.preventDefault()

		const filters = {
			'reservation.pre_reservation_passenger.contact_informations_name': this.state.reservation_user_name,
			reservation_verification: this.state.reservation_verification,
			reservation_query_date: this.state.reservation_query_date,
			'reservation.pre_reservation_activity_date': this.state.reservation_activity_date,
			"reservation_basket.basket_activity._id": this.state.reservation_activity,
		}

		this.props.getReservations(1, filters)
	}

	render() {

		// render categories
		let categoriesHtml = ''
		if (this.state.is_categories_loaded) {
			categoriesHtml = this.state.categories.map((item) => {
				return (
					<option value={item._id}>{item.category_name}</option>
				)
			})
		} else {
			categoriesHtml = (
				<option value="">Kategoriler yükleniyor...</option>
			)
		}

		// render activities
		let activitiesHtml = ''
		if (this.state.is_activities_loaded) {
			activitiesHtml = this.state.activities.map((item) => {
				return (
					<option value={item._id}>{item.activity_name}</option>
				)
			})
		} else {
			activitiesHtml = (
				<option value="">Aktiviteler yükleniyor...</option>
			)
		}

		return (
			<form className="" onSubmit={this.handleOnSubmit}>
				<div className=" inner-2" style={{ display: 'inline-flex' }}>
					<div className="form-group">
						<label>Müşteri Adı</label>
						<input className="form-control" type="text" onChange={this.handleOnChange} name="reservation_user_name" value={this.reservation_user_name} placeholder="Rezervasyon sahibi adı ile ara..." />
					</div>
					<div className="form-group">
						<label>İşlem tarihi</label>
						<input className="form-control" type="date" onChange={this.handleOnChange} name="reservation_query_date" value={this.reservation_query_date} />
					</div>

					<div className="form-group">
						<label>Aktivitenin Gerçekleşeceği Tarih</label>
						<input className="form-control" type="date" onChange={this.handleOnChange} name="reservation_activity_date" value={this.reservation_activity_date} />
					</div>
					<div className="form-group">
						<label>Onay Durumu</label>

						<select className="form-control wide" onChange={this.handleOnChange} name="reservation_verification" value={this.reservation_verification}>
							<option value="">Tüm onay durumları</option>
							<option value="pending">Onay Bekliyor</option>
							<option value="approved">Onaylandı</option>
							<option value="cancelled">İptal Edildi</option>
						</select>
					</div>
					<div className="form-group">
						<label>Aktivite</label>

						<select className="form-control wide" onChange={this.handleOnChange} name="reservation_activity" value={this.reservation_activity}>
							<option value="">Tüm aktiviteler</option>
							{activitiesHtml}
						</select>
					</div>
					<button type="submit" className="btn gray approve float-right mt-0"><span className="fa fa-search"></span></button>
				</div>
			</form>

		)
	}

}

export default FormFilterReservation