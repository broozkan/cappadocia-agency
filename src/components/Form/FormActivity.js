import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const FormActivity = () => {


	const [state, setState] = useState({
		activity_category: [],
		activity_language: '',
		activity_name: '',
		activity_short_description: '',
		activity_photos: [],
		activity_currency: '',
		activity_price: '',
		activity_description: '',
		activity_cancellation_terms: [],
		activity_action_plan: [],
		activity_additional_informations: [],
		activity_quota_informations: []

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



	const handleOnClickNewCancellation = (e) => {

		let cancellationInfoArray = state.activity_cancellation_terms

		cancellationInfoArray.push({
			cancellation_info_description: ''
		})

		setState({
			...state,
			activity_cancellation_terms: cancellationInfoArray
		})

	}

	const handleOnChangeCancellation = async (e) => {
		let newArray = new Array()

		await state.activity_cancellation_terms.map((item, index) => {
			if (index == e.target.dataset.index) {
				item.cancellation_info_description = e.target.value
			}

			newArray.push(item)
		})

		setState({
			...state,
			activity_cancellation_terms: newArray
		})
	}

	const handleOnClickDeleteCancellation = async (e) => {
		let newArray = new Array()

		await state.activity_cancellation_terms.map((item, index) => {
			if (index != e.target.dataset.index) {
				newArray.push(
					item
				)
			}
		})



		setState({
			...state,
			activity_cancellation_terms: newArray
		})
	}



	const handleOnClickNewActionPlan = (e) => {

		let actionPlanArray = state.activity_action_plan

		actionPlanArray.push({
			action_plan_time_info: '',
			action_plan_description: ''
		})

		setState({
			...state,
			activity_action_plan: actionPlanArray
		})

	}

	const handleOnChangeActionPlan = async (e) => {
		let newArray = new Array()

		await state.activity_action_plan.map((item, index) => {
			if (index == e.target.dataset.index) {
				item[e.target.name] = e.target.value
			}

			newArray.push(item)
		})

		setState({
			...state,
			activity_action_plan: newArray
		})
	}

	const handleOnClickDeleteActionPlan = async (e) => {
		let newArray = new Array()

		await state.activity_action_plan.map((item, index) => {
			if (index != e.target.dataset.index) {
				newArray.push(
					item
				)
			}
		})



		setState({
			...state,
			activity_action_plan: newArray
		})
	}



	const handleOnClickNewAdditionalInfo = (e) => {

		let additionalInfoArray = state.activity_additional_informations

		additionalInfoArray.push({
			additional_info_title: '',
			additional_info_value: ''
		})

		setState({
			...state,
			activity_additional_informations: additionalInfoArray
		})

	}

	const handleOnChangeAdditionalInfo = async (e) => {
		let newArray = new Array()

		await state.activity_additional_informations.map((item, index) => {
			if (index == e.target.dataset.index) {
				item[e.target.name] = e.target.value
			}

			newArray.push(item)
		})

		setState({
			...state,
			activity_additional_informations: newArray
		})
	}

	const handleOnClickDeleteAdditionalInfo = async (e) => {
		let newArray = new Array()

		await state.activity_additional_informations.map((item, index) => {
			if (index != e.target.dataset.index) {
				newArray.push(
					item
				)
			}
		})



		setState({
			...state,
			activity_additional_informations: newArray
		})
	}


	const handleOnClickNewQuotaInfo = (e) => {

		let quotaInfoArray = state.activity_quota_informations

		quotaInfoArray.push({
			quota_info_date: '',
			quota_info_beginning_hour: '',
			quota_info_ending_hour: '',
			quota: ''
		})

		setState({
			...state,
			activity_quota_informations: quotaInfoArray
		})

	}

	const handleOnChangeQuotaInfo = async (e) => {
		let newArray = new Array()

		await state.activity_quota_informations.map((item, index) => {
			if (index == e.target.dataset.index) {
				item[e.target.name] = e.target.value
			}

			newArray.push(item)
		})

		setState({
			...state,
			activity_quota_informations: newArray
		})
	}

	const handleOnClickDeleteQuotaInfo = async (e) => {
		let newArray = new Array()

		await state.activity_quota_informations.map((item, index) => {
			if (index != e.target.dataset.index) {
				newArray.push(
					item
				)
			}
		})



		setState({
			...state,
			activity_quota_informations: newArray
		})
	}


	console.log(state);

	// render cancellation info
	let cancellationInfoHtml = state.activity_cancellation_terms.map((item, index) => {
		return (
			<div className="row">
				<div className="col-md-4">
					<div class="form-group">
						<label>İptal Koşulu Açıklaması *</label>
						<input type="text" class="form-control" required name="cancellation_info_description" data-index={index} value={item.cancellation_info_description} onChange={handleOnChangeCancellation} placeholder="İptal koşulu açıklaması giriniz" />
					</div>
				</div>


				<div className="col-md-1">
					<label>İşlem</label>
					<button type="button" className="btn btn-danger" onClick={handleOnClickDeleteCancellation} data-index={index}><span className="fa fa-trash"></span></button>
				</div>
			</div>
		)
	})


	// render action plan
	let actionPlanHtml = state.activity_action_plan.map((item, index) => {
		return (
			<div className="row">
				<div className="col-md-4">
					<div class="form-group">
						<label>Hareket Saat Bilgisi *</label>
						<input type="text" class="form-control" required name="action_plan_time_info" data-index={index} value={item.action_plan_time_info} onChange={handleOnChangeActionPlan} placeholder="Hareket saat bilgisi giriniz" />
					</div>
				</div>
				<div className="col-md-7">
					<div class="form-group">
						<label>Hareket Açıklaması *</label>
						<input type="text" class="form-control" required name="action_plan_description" data-index={index} value={item.action_plan_description} onChange={handleOnChangeActionPlan} placeholder="Hareket açıklaması giriniz" />
					</div>
				</div>

				<div className="col-md-1">
					<label>İşlem</label>
					<button type="button" className="btn btn-danger" onClick={handleOnClickDeleteActionPlan} data-index={index}><span className="fa fa-trash"></span></button>
				</div>
			</div>
		)
	})


	// render additional info
	let additionalInfoHtml = state.activity_additional_informations.map((item, index) => {
		return (
			<div className="row">
				<div className="col-md-4">
					<div class="form-group">
						<label>Ek Bilgi başlığı *</label>
						<input type="text" class="form-control" required name="additional_info_title" data-index={index} value={item.additional_info_title} onChange={handleOnChangeAdditionalInfo} placeholder="Ek bilgi başlığı giriniz" />
					</div>
				</div>
				<div className="col-md-7">
					<div class="form-group">
						<label>Ek Bilgi Değeri *</label>
						<input type="text" class="form-control" required name="additional_info_value" data-index={index} value={item.additional_info_value} onChange={handleOnChangeAdditionalInfo} placeholder="Ek bilgi değeri giriniz" />
					</div>
				</div>

				<div className="col-md-1">
					<label>İşlem</label>
					<button type="button" className="btn btn-danger" onClick={handleOnClickDeleteAdditionalInfo} data-index={index}><span className="fa fa-trash"></span></button>
				</div>
			</div>
		)
	})


	// render quota info
	let quotaInfoHtml = state.activity_quota_informations.map((item, index) => {
		return (
			<div className="row">
				<div className="col-md-4">
					<div class="form-group">
						<label>Tarih *</label>
						<input type="date" class="form-control" required name="quota_info_date" data-index={index} value={item.quota_info_date} onChange={handleOnChangeQuotaInfo} placeholder="Aktivite kısa açıklaması giriniz" />
					</div>
				</div>
				<div className="col-md-2">
					<label>Başlangıç saati *</label>
					<select className="form-control" required name="quota_info_beginning_hour" data-index={index} value={item.quota_info_beginning_hour} onChange={handleOnChangeQuotaInfo}>
						<option value="" disabled selected>Başlangıç Saati</option>
						<option value="05:00">05:00</option>
						<option value="06:00">06:00</option>
						<option value="07:00">07:00</option>
						<option value="08:00">08:00</option>
						<option value="09:00">09:00</option>
						<option value="10:00">10:00</option>
						<option value="11:00">11:00</option>
						<option value="12:00">12:00</option>
						<option value="13:00">13:00</option>
						<option value="14:00">14:00</option>
						<option value="15:00">15:00</option>
						<option value="16:00">16:00</option>
						<option value="17:00">17:00</option>
						<option value="18:00">18:00</option>
						<option value="19:00">19:00</option>
						<option value="20:00">20:00</option>
						<option value="21:00">21:00</option>
						<option value="22:00">22:00</option>
						<option value="23:00">23:00</option>
						<option value="00:00">00:00</option>
						<option value="01:00">01:00</option>
						<option value="02:00">02:00</option>
						<option value="03:00">03:00</option>
						<option value="04:00">04:00</option>
					</select>
				</div>
				<div className="col-md-2">
					<label>Bitiş saati *</label>
					<select className="form-control" required name="quota_info_ending_hour" data-index={index} value={item.quota_info_ending_hour} onChange={handleOnChangeQuotaInfo}>
						<option value="" disabled selected>Bitiş Saati</option>
						<option value="05:00">05:00</option>
						<option value="06:00">06:00</option>
						<option value="07:00">07:00</option>
						<option value="08:00">08:00</option>
						<option value="09:00">09:00</option>
						<option value="10:00">10:00</option>
						<option value="11:00">11:00</option>
						<option value="12:00">12:00</option>
						<option value="13:00">13:00</option>
						<option value="14:00">14:00</option>
						<option value="15:00">15:00</option>
						<option value="16:00">16:00</option>
						<option value="17:00">17:00</option>
						<option value="18:00">18:00</option>
						<option value="19:00">19:00</option>
						<option value="20:00">20:00</option>
						<option value="21:00">21:00</option>
						<option value="22:00">22:00</option>
						<option value="23:00">23:00</option>
						<option value="00:00">00:00</option>
						<option value="01:00">01:00</option>
						<option value="02:00">02:00</option>
						<option value="03:00">03:00</option>
						<option value="04:00">04:00</option>
					</select>
				</div>
				<div className="col-md-2">
					<div class="form-group">
						<label>Kontenjan *</label>
						<input type="number" class="form-control" required name="quota" data-index={index} value={item.quota} onChange={handleOnChangeQuotaInfo} placeholder="Kontenjan giriniz" />
					</div>
				</div>
				<div className="col-md-1">
					<label>İşlem</label>
					<button type="button" onClick={handleOnClickDeleteQuotaInfo} data-index={index} className="btn btn-danger"><span className="fa fa-trash"></span></button>
				</div>
			</div>
		)
	})

	return (
		<form>
			<h5>1. Aktivite Bilgileri</h5>
			<div class="form-group mt-4">
				<label>Aktivite Kategorisi</label>
				<select className="form-control" name="activity_category" value={state.activity_category} onChange={handleOnChange}>
					<option value="" selected disabled>Kategori Seçiniz</option>
					<option>Balon Turları</option>
				</select>
			</div>
			<div class="form-group">
				<label>Aktivite Dili</label>
				<select className="form-control" name="activity_language" value={state.activity_language} onChange={handleOnChange}>
					<option value="" selected disabled>Dil Seçiniz</option>
					<option value="tr">Türkçe</option>
					<option value="en">İngilizce</option>
				</select>
			</div>
			<div class="form-group">
				<label>Aktivite Adı</label>
				<input type="text" class="form-control" name="activity_name" value={state.activity_name} onChange={handleOnChange} placeholder="Aktivite adı giriniz" />
			</div>
			<div class="form-group">
				<label>Aktivite Kısa Açıklaması</label>
				<input type="text" class="form-control" name="activity_short_description" value={state.activity_short_description} onChange={handleOnChange} placeholder="Aktivite kısa açıklaması giriniz" />
			</div>
			<div class="form-group">
				<label>Aktivite Görselleri <sup>İlk görsel kapak fotoğrafı olacaktır</sup> </label>
				<input type="file" multiple class="form-control" />
			</div>
			<div class="form-group">
				<label>Aktivite Fiyat Birimi</label>
				<select className="form-control" name="activity_currency" value={state.activity_currency} onChange={handleOnChange}>
					<option value="" disabled selected>Birim seçiniz</option>
					<option value="turkish_lira">Türk Lirası</option>
					<option value="dollar">Amerikan Doları</option>
					<option value="euro">Euro</option>
				</select>
			</div>
			<div class="form-group">
				<label>Aktivite Fiyatı <sup>Kişi başı fiyat giriniz</sup> </label>
				<input type="number" step=".01" class="form-control" name="activity_price" value={state.activity_price} onChange={handleOnChange} placeholder="Aktivite fiyatı giriniz" />
			</div>
			<div class="form-group">
				<label>Aktivite Detaylı Açıklaması</label>
				<CKEditor
					editor={ClassicEditor}
					data="<p>Hello from CKEditor 5!</p>"
					onReady={editor => {
						// You can store the "editor" and use when it is needed.
						console.log('Editor is ready to use!', editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log({ event, editor, data });
					}}
				/>
			</div>

			<hr></hr>
			<h5>
				2. İptal & İade Bilgileri
				<button type="button" className="btn btn-success btn-sm ml-2" onClick={handleOnClickNewCancellation}><span className="fa fa-plus"></span></button>
			</h5>
			{cancellationInfoHtml}
			<hr></hr>
			<h5>
				3. Hareket Bilgileri
				<button type="button" className="btn btn-success btn-sm ml-2" onClick={handleOnClickNewActionPlan}><span className="fa fa-plus"></span></button>
			</h5>
			{actionPlanHtml}
			<hr></hr>
			<h5>
				4. Ek Bilgiler
				<button type="button" className="btn btn-success btn-sm ml-2" onClick={handleOnClickNewAdditionalInfo}><span className="fa fa-plus"></span></button>
			</h5>
			{additionalInfoHtml}
			<hr></hr>
			<h5>
				5. Kontenjan Bilgileri
				<button type="button" className="btn btn-success btn-sm ml-2" onClick={handleOnClickNewQuotaInfo}><span className="fa fa-plus"></span></button>
			</h5>
			{quotaInfoHtml}
			<div class="form-group">
				<p><a href="#0" class="btn_1 medium">Kaydet</a></p>
			</div>
		</form>
	)
}

export default FormActivity