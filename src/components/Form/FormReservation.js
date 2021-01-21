import React, { useState } from 'react'


const FormReservation = () => {


	const [state, setState] = useState({
		reservation_activity: [],
		reservation_passenger_information: [],
		reservation_price: '',
		reservation_payment_method: '',
		reservation_verification: '',
		reservation_passenger_informations: []

	})


	const handleOnChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}


	const handleSubmit = (e) => {
		e.preventDefault()

		console.log(state);
	}


	const handleOnClickNewPassengerInfo = (e) => {

		let passengerInfoArray = state.reservation_passenger_informations

		passengerInfoArray.push({
			passenger_info_name_surname: '',
			passenger_info_phone_number: '',
			passenger_info_email_address: ''
		})

		setState({
			...state,
			reservation_passenger_informations: passengerInfoArray
		})

	}

	const handleOnChangePassengerInfo = async (e) => {
		let newArray = new Array()

		await state.reservation_passenger_informations.map((item, index) => {
			if (index == e.target.dataset.index) {
				item[e.target.name] = e.target.value
			}

			newArray.push(item)
		})

		setState({
			...state,
			reservation_passenger_informations: newArray
		})
	}

	const handleOnClickDeletePassengerInfo = async (e) => {
		let newArray = new Array()

		await state.reservation_passenger_informations.map((item, index) => {
			if (index != e.target.dataset.index) {
				newArray.push(
					item
				)
			}
		})



		setState({
			...state,
			reservation_passenger_informations: newArray
		})
	}


	// render passenger informations
	let passengerInfoHtml = state.reservation_passenger_informations.map((item, index) => {
		return (
			<div className="row">
				<div className="col-md-4">
					<div class="form-group">
						<label>Yolcu Adı Soyadı *</label>
						<input type="text" class="form-control" data-index={index} value={item.passenger_info_name_surname} onChange={handleOnChangePassengerInfo} required name="passenger_info_name_surname" placeholder="Yolcu adı soyadı giriniz" />
					</div>
				</div>
				<div className="col-md-3">
					<div class="form-group">
						<label>Yolcu Telefon Numarası *</label>
						<input type="text" class="form-control" data-index={index} value={item.passenger_info_phone_number} onChange={handleOnChangePassengerInfo} required name="passenger_info_phone_number" placeholder="Yolcu telefon numarası giriniz" />
					</div>
				</div>
				<div className="col-md-3">
					<div class="form-group">
						<label>Yolcu e-posta adresi *</label>
						<input type="text" class="form-control" data-index={index} value={item.passenger_info_email_address} onChange={handleOnChangePassengerInfo} required name="passenger_info_email_address" placeholder="Yolcu e-posta adresi giriniz" />
					</div>
				</div>
				<div className="col-md-1">
					<label>İşlem</label>
					<button type="button" className="btn btn-danger" data-index={index} onClick={handleOnClickDeletePassengerInfo}><span className="fa fa-trash"></span></button>
				</div>
			</div>
		)
	})

	console.log(state);

	return (
		<form>
			<h5>1. Rezervasyon Bilgileri</h5>
			<div class="form-group mt-4">
				<label>Rezervasyon Aktivitesi</label>
				<select className="form-control" name="reservation_activity" value={state.reservation_activity} onChange={handleOnChange}>
					<option value="" selected disabled>Aktivite Seçiniz</option>
					<option>Standart Balon Turu</option>
				</select>
			</div>
			<div class="form-group">
				<label>Rezervasyon Tarih ve Kontenjanı</label>
				<select className="form-control" name="reservation_passenger_information" value={state.reservation_passenger_information} onChange={handleOnChange}>
					<option value="" selected disabled>Kontenjan Seçiniz</option>
					<option>21-05-2021 / 09:00 - 10:30</option>
					<option>21-05-2021 / 11:00 - 12:30</option>
				</select>
			</div>
			<div class="form-group">
				<label>Rezervasyon Toplam Ücreti</label>
				<input type="number" step=".01" class="form-control" name="reservation_price" value={state.reservation_price} onChange={handleOnChange} placeholder="Rezervasyon fiyatı giriniz" />
			</div>
			<div class="form-group">
				<label>Rezervasyon Ödeme Tipi</label>
				<select className="form-control" name="reservation_payment_method" value={state.reservation_payment_method} onChange={handleOnChange}>
					<option value="" selected disabled>Ödeme Yöntemi Seçiniz</option>
					<option>Online</option>
					<option>Nakit</option>
				</select>
			</div>
			<div class="form-group">
				<label>Rezervasyon Onay Durumu</label>
				<select className="form-control" name="reservation_verification" value={state.reservation_verification} onChange={handleOnChange}>
					<option value="" selected disabled>Onay Durumu Seçiniz</option>
					<option>Onaylandı</option>
					<option>Onay Bekliyor</option>
					<option>Reddedildi</option>
				</select>
			</div>

			<hr></hr>
			<h5>
				2. Yolcu Bilgileri
				<button type="button" className="btn btn-success btn-sm ml-2" onClick={handleOnClickNewPassengerInfo}><span className="fa fa-plus"></span></button>
			</h5>
			{passengerInfoHtml}
			<hr></hr>

			<div class="form-group">
				<p><a href="#0" class="btn_1 medium">Kaydet</a></p>
			</div>
		</form>
	)
}

export default FormReservation