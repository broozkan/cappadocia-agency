import React, { useState } from 'react'
import { Component } from 'react'
import AsideTotal from '../Aside/AsideBasketTotal'


class FormPassengerInformation extends Component {

	constructor() {
		super()

		this.state = {
			passenger_name: '',
			passenger_surname: '',
			passenger_birthday: '',
			passenger_id_number: '',
			passenger_phone_number: '',
			passenger_email: '',
			passenger_country: '',
			passenger_address: ''
		}
		this.handleOnChange = this.handleOnChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}




	handleOnChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
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

		return (

			<form onSubmit={this.handleSubmit} method="POST">
				<div className="row">
					<div className="col-lg-8">
						<h5>1. Yolcu Bilgileri</h5>
						<div className="row mt-4">
							<div className="col-lg-6">
								<div class="form-group ">
									<label>Ad *</label>
									<input type="text" class="form-control" name="passenger_name" required value={this.state.passenger_name} onChange={this.handleOnChange} placeholder="Adınızı giriniz" />
								</div>
							</div>
							<div className="col-lg-6">
								<div class="form-group">
									<label>Soyad *</label>
									<input type="text" class="form-control" name="passenger_surname" required value={this.state.passenger_surname} onChange={this.handleOnChange} placeholder="Soyadınızı giriniz" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<div class="form-group ">
									<label>Tc Kimlik No / Pasaport No *</label>
									<input type="text" class="form-control" name="passenger_id_number" required value={this.state.passenger_id_number} onChange={this.handleOnChange} placeholder="Kimlik veya pasaport numaranızı giriniz" />
								</div>
							</div>
							<div className="col-lg-6">
								<div class="form-group">
									<label>Doğum Tarihi *</label>
									<input type="date" class="form-control" name="passenger_birthday" required value={this.state.passenger_birthday} onChange={this.handleOnChange} placeholder="" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<div class="form-group ">
									<label>Telefon Numarası *</label>
									<input type="nu9mber" class="form-control" name="passenger_phone_number" required value={this.state.passenger_phone_number} onChange={this.handleOnChange} placeholder="Telefon numaranızı giriniz" />
								</div>
							</div>
							<div className="col-lg-6">
								<div class="form-group">
									<label>E-posta Adresi *</label>
									<input type="email" class="form-control" name="passenger_email" required value={this.state.passenger_email} onChange={this.handleOnChange} placeholder="E-posta adresinizi giriniz" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<div class="form-group ">
									<label>Ülke *</label>
									<select className="form-control" name="passenger_country" onChange={this.handleOnChange} value={this.state.passenger_country}>
										<option value="" disabled selected>Ülke seçiniz</option>
										<option value="tr" >Türkiye</option>
									</select>
								</div>
							</div>
							<div className="col-lg-6">
								<div class="form-group">
									<label>Adres *</label>
									<input type="text" class="form-control" name="passenger_address" required value={this.state.passenger_address} onChange={this.handleOnChange} placeholder="Adresinizi giriniz" />
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