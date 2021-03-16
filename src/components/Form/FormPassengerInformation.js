import React, { useState } from 'react'
import { Component } from 'react'
import { getTranslatedString } from '../../controllers/controller'
import AsideTotal from '../Aside/AsideBasketTotal'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

class FormPassengerInformation extends Component {

	constructor() {
		super()

		this.state = {
			mature_passengers: [],

			child_passenger_gender: '',
			child_passenger_name: '',
			child_passenger_surname: '',
			child_passenger_id_number: '',
			child_passenger_country: '',
			contact_informations_name: '',
			contact_informations_surname: '',
			contact_informations_id_number: '',
			contact_informations_phone_number: '',
			contact_informations_email_address: '',
			contact_informations_province: ''

		}
		this.handleOnChange = this.handleOnChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleOnChangePhoneNumber = this.handleOnChangePhoneNumber.bind(this)
		this.handleOnChangeMatureForm = this.handleOnChangeMatureForm.bind(this)
	}

	componentDidMount() {
		const preReservationData = JSON.parse(localStorage.getItem('pre_reservation_data'))
		let maturePassengersArray = new Array()

		for (let index = 0; index < preReservationData.pre_reservation_mature_count; index++) {
			maturePassengersArray.push({
				passenger_gender: '',
				passenger_name: '',
				passenger_surname: '',
				passenger_birthday: '',
				passenger_id_number: '',
				passenger_phone_number: '',
				passenger_country: '',
			})
		}

		this.setState({
			mature_passengers: maturePassengersArray
		})
	}

	handleOnChangeMatureForm = (e) => {
		let maturePassengerInformations = this.state.mature_passengers


		maturePassengerInformations.map((item, index) => {
			if (index == e.target.dataset.index) {
				item[e.target.name] = e.target.value
			}
		})

		this.setState({
			mature_passengers: maturePassengerInformations
		})

	}

	handleOnChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleOnChangePhoneNumber = (e) => {

		this.setState({
			contact_informations_phone_number: e
		})
	}

	handleSubmit = async (e) => {
		e.preventDefault()

		let preReservationData = await JSON.parse(localStorage.getItem('pre_reservation_data'))

		preReservationData["pre_reservation_passenger"] = this.state

		await localStorage.setItem('pre_reservation_data', JSON.stringify(preReservationData))

		window.location.href = '/odeme'

	}

	render() {

		console.log(this.state);

		const preReservationData = JSON.parse(localStorage.getItem('pre_reservation_data'))

		// render child form
		let formChildFieldHtml = ''
		if (preReservationData.pre_reservation_child_count != "0") {
			formChildFieldHtml = (
				<>
					<h5>1. {getTranslatedString('child')} {getTranslatedString('informations')}</h5>
					<div className="row mt-4">
						<div className="col-lg-4">
							<div class="form-group ">
								<label>{getTranslatedString('gender')} *</label>
								<select className="form-control" onChange={this.handleOnChange} name="child_passenger_gender" value={this.state.child_passenger_gender} required>
									<option value="" disabled selected>{getTranslatedString('gender_placeholder')}</option>
									<option value="male">Erkek</option>
									<option value="female">Kadın</option>
									<option value="other">Diğer</option>
								</select>
							</div>
						</div>
						<div className="col-lg-4">
							<div class="form-group ">
								<label>{getTranslatedString('name')} *</label>
								<input type="text" class="form-control" name="child_passenger_name" required value={this.state.child_passenger_name} onChange={this.handleOnChange} />
							</div>
						</div>
						<div className="col-lg-4">
							<div class="form-group">
								<label>{getTranslatedString('surname')} *</label>
								<input type="text" class="form-control" name="child_passenger_surname" required value={this.state.child_passenger_surname} onChange={this.handleOnChange} />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div class="form-group ">
								<label>{getTranslatedString('id_number')} *</label>
								<input type="text" class="form-control" name="child_passenger_id_number" required value={this.state.child_passenger_id_number} onChange={this.handleOnChange} />
							</div>
						</div>
						<div className="col-lg-4">
							<div class="form-group ">
								<label>{getTranslatedString('country')} *</label>
								<select className="form-control" name="child_passenger_country" onChange={this.handleOnChange} value={this.state.child_passenger_country}>
									<option value="" disabled selected>{getTranslatedString('country_placeholder')}</option>
									<option value="tr" >Türkiye</option>
								</select>
							</div>
						</div>
					</div>
				</>
			)
		}

		// render mature form

		let matureFormJsx = this.state.mature_passengers.map((item, index) => {

			return (
				<>
					<h5>{index + 1}. {getTranslatedString('passenger_information_h5_1')}</h5>
					<div className="row mt-4">
						<div className="col-lg-3">
							<div class="form-group ">
								<label>{getTranslatedString('gender')} *</label>
								<select className="form-control" data-index={index} name="passenger_gender" onChange={this.handleOnChangeMatureForm} value={this.state.passenger_gender} required>
									<option value="" disabled selected>{getTranslatedString('gender_placeholder')}</option>
									<option value="male">{getTranslatedString('male')}</option>
									<option value="female">{getTranslatedString('female')}</option>
									<option value="other">{getTranslatedString('other')}</option>
								</select>
							</div>
						</div>
						<div className="col-lg-3">
							<div class="form-group ">
								<label>{getTranslatedString('name')} *</label>
								<input type="text" class="form-control" data-index={index} name="passenger_name" required value={this.state.passenger_name} onChange={this.handleOnChangeMatureForm} />
							</div>
						</div>
						<div className="col-lg-3">
							<div class="form-group">
								<label>{getTranslatedString('surname')} *</label>
								<input type="text" class="form-control" data-index={index} name="passenger_surname" required value={this.state.passenger_surname} onChange={this.handleOnChangeMatureForm} />
							</div>
						</div>
						<div className="col-lg-3">
							<div class="form-group ">
								<label>{getTranslatedString('country')} *</label>
								<select className="form-control" data-index={index} name="passenger_country" onChange={this.handleOnChangeMatureForm} value={this.state.passenger_country}>
									<option value="" disabled selected>{getTranslatedString('country_placeholder')}</option>
									<option value="tr" >Türkiye</option>
								</select>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div class="form-group">
								<label>{getTranslatedString('birthday')} *</label>
								<input type="date" class="form-control" data-index={index} name="passenger_birthday" required value={this.state.passenger_birthday} onChange={this.handleOnChangeMatureForm} />
							</div>
						</div>
						<div className="col-lg-4">
							<div class="form-group ">
								<label>{getTranslatedString('id_number')} *</label>
								<input type="text" class="form-control" data-index={index} name="passenger_id_number" required value={this.state.passenger_id_number} onChange={this.handleOnChangeMatureForm} />
							</div>
						</div>
						<div className="col-lg-4">
							<div class="form-group ">
								<label>{getTranslatedString('phone_number')} *</label>
								<input type="text" class="form-control" data-index={index} name="passenger_phone_number" required value={this.state.passenger_phone_number} onChange={this.handleOnChangeMatureForm} />
							</div>
						</div>
					</div>
				</>
			)
		})



		return (

			<form onSubmit={this.handleSubmit} method="POST">
				<div className="row">
					<div className="col-lg-8">
						{matureFormJsx}
						{formChildFieldHtml}
						<h5>{getTranslatedString('contact')} {getTranslatedString('informations')}</h5>
						<div className="row mt-4">
							<div className="col-lg-4">
								<div class="form-group ">
									<label>{getTranslatedString('name')} *</label>
									<input type="text" class="form-control" name="contact_informations_name" required value={this.state.contact_informations_name} onChange={this.handleOnChange} />
								</div>
							</div>
							<div className="col-lg-4">
								<div class="form-group ">
									<label>{getTranslatedString('surname')} *</label>
									<input type="text" class="form-control" name="contact_informations_surname" required value={this.state.contact_informations_surname} onChange={this.handleOnChange} />
								</div>
							</div>
							<div className="col-lg-4">
								<div class="form-group ">
									<label>{getTranslatedString('id_number')} *</label>
									<input type="text" class="form-control" name="contact_informations_id_number" required value={this.state.contact_informations_id_number} onChange={this.handleOnChange} />
								</div>
							</div>
						</div>
						<div className="row">

							<div className="col-lg-4">
								<div class="form-group ">
									<label>{getTranslatedString('email_address')} *</label>
									<input type="text" class="form-control" name="contact_informations_email_address" required value={this.state.contact_informations_email_address} onChange={this.handleOnChange} />
								</div>
							</div>
							<div className="col-lg-4">
								<div class="form-group ">
									<label>{getTranslatedString('phone_number')} *</label>
									<PhoneInput
										placeholder="Enter phone number"
										value={this.state.contact_informations_phone_number}
										name="contact_informations_phone_number"
										onChange={this.handleOnChangePhoneNumber}
									/>
								</div>
							</div>

						</div>
						<div className="row">
							<div className="col-lg-12">
								<div class="form-group ">
									<label>{getTranslatedString('passenger_informations_pickup_point')} * <sup>{getTranslatedString('passenger_informations_pickup_point_sup')}</sup></label>
									<input type="text" class="form-control" name="contact_informations_address" required value={this.state.contact_informations_address} onChange={this.handleOnChange} />
								</div>
							</div>
						</div>

					</div>
					<div className="col-lg-4">
						<AsideTotal />
					</div>
				</div>



			</form>

		)
	}

}

export default FormPassengerInformation