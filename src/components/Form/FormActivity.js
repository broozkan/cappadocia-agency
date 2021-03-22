import React, { Component } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import api from '../../services/api';
import Swal from 'sweetalert2';
import dateFormat from 'dateformat'
import ModalMultipleQuota from '../Modal/ModalMultipleQuota';
import { AdminContext } from '../../contexts/site/AdminContext';


class FormActivity extends Component {
	static contextType = AdminContext

	constructor(props) {
		super(props)

		this.state = {
			activity_category: [],
			activity_language: '',
			activity_name: '',
			activity_short_description: '',
			activity_photos: [],
			activity_photo_names: [],
			activity_currency: '',
			activity_price: '',
			activity_description: '',
			activity_cancellation_terms: [],
			activity_action_plan: [],
			activity_additional_informations: [],
			activity_quota_informations: [],
			categories: [],
			is_form_submitting: false,
			multiple_quota_modal_visibility: false,
			ckeditor: ''
		}
	}

	componentDidMount() {
		this.getCategories()

		if (this.props.activity_id) {
			this.getActivity()
		}
	}


	getActivity = async () => {

		const activity = await api.get('/activity/get/' + this.props.activity_id)

		this.setState({

			activity_category: activity.data.activity_category[0],
			activity_language: activity.data.activity_language,
			activity_short_description: activity.data.activity_short_description,
			activity_photo_names: activity.data.activity_photos,
			activity_currency: activity.data.activity_currency,
			activity_name: activity.data.activity_name,
			activity_price: activity.data.activity_price,
			activity_description: activity.data.activity_description,
			activity_cancellation_terms: activity.data.activity_cancellation_terms,
			activity_action_plan: activity.data.activity_action_plan,
			activity_additional_informations: activity.data.activity_additional_informations,
			activity_quota_informations: activity.data.activity_quota_informations
		})
	}

	getCategories = async () => {
		console.log("started");
		const categories = await api.get('/category/list/1', {})

		await this.setState({

			categories: categories.data.docs
		})

	}

	handleOnClickOpenMultipleQuotaModal = () => {
		if (this.state.multiple_quota_modal_visibility) {
			this.setState({
				multiple_quota_modal_visibility: false
			})
		} else {
			this.setState({
				multiple_quota_modal_visibility: true
			})
		}

		console.log(this.state);

	}

	handleOnClickAddMoreQuota = async () => {
		let quotas = this.state.activity_quota_informations

		let todayDate = new Date(this.context.multipleQuotaInformations.multiple_quota_beginning_date)


		for (let index = 1; index < this.context.multipleQuotaInformations.multiple_quota_iteration_count; index++) {

			//console.log(todayDate.getDate() + index);
			await todayDate.setDate(todayDate.getDate() + 1)


			const quotaInfoDate = todayDate.getFullYear() + '-' + ("0" + (todayDate.getMonth() + 1)).slice(-2) + '-' + ("0" + todayDate.getDate()).slice(-2)


			quotas.push({
				quota_info_date: quotaInfoDate,
				quota_info_beginning_hour: this.context.multipleQuotaInformations.multiple_quota_beginning_hour,
				quota_info_ending_hour: this.context.multipleQuotaInformations.multiple_quota_ending_hour,
				quota: this.context.multipleQuotaInformations.multiple_quota_quota_count,
				quota_additional_price: this.context.multipleQuotaInformations.multiple_quota_quota_additional_price
			})

			this.setState({
				activity_quota_informations: quotas
			})

		}

	}

	handleOnChange = (e) => {
		if (e.target.type === "select-one") {
			if (e.target.name === "activity_category") {
				let activity_category = []

				this.state.categories.map((item) => {
					if (item._id == e.target.value) {
						activity_category.push(item)
					}
				})
				this.setState({

					activity_category: activity_category
				})
			} else {
				this.setState({

					[e.target.name]: e.target.value
				})
			}



		} else if (e.target.type === "file") {
			let activity_photos = new Array()
			let activity_photo_names = new Array()

			console.log(e.target.files.length);

			for (let index = 0; index < e.target.files.length; index++) {
				activity_photos.push(e.target.files[index])
				activity_photo_names.push({
					activity_photo_name: e.target.files[index].name
				})
			}

			this.setState({

				activity_photos: activity_photos,
				activity_photo_names: activity_photo_names
			})

		} else {
			this.setState({

				[e.target.name]: e.target.value
			})
		}
	}



	handleCkEditorChange = (event, editor) => {
		const data = editor.getData();


		this.setState({

			activity_description: data
		})

	}


	handleSubmit = async (e) => {
		e.preventDefault()

		let formData = new FormData()

		for (let index = 0; index < this.state.activity_photos.length; index++) {
			await formData.append('file', this.state.activity_photos[index])
		}
		await formData.append('data', JSON.stringify(this.state))


		let submitResponse
		if (this.props.activity_id) {
			submitResponse = await api.put('/activity/update/' + this.props.activity_id, formData, { headers: { 'content-type': 'multipart/form-data' } })

			this.setState({

				is_form_submitting: false
			})
		} else {
			submitResponse = await api.post('/activity/new', formData, { headers: { 'content-type': 'multipart/form-data' } })

		}

		if (submitResponse.data.response) {
			Swal.fire({
				title: 'Başarılı',
				text: 'Aktivite kaydedildi',
				icon: 'success'
			})

		} else {
			Swal.fire({
				title: 'Hata',
				text: submitResponse.data.responseData,
				icon: 'error'
			})
			this.setState({

				is_form_submitting: false
			})
		}
	}



	handleOnClickNewCancellation = (e) => {

		let cancellationInfoArray = this.state.activity_cancellation_terms

		cancellationInfoArray.push({
			cancellation_info_description: ''
		})

		this.setState({

			activity_cancellation_terms: cancellationInfoArray
		})

	}

	handleOnChangeCancellation = async (e) => {
		let newArray = new Array()

		await this.state.activity_cancellation_terms.map((item, index) => {
			if (index == e.target.dataset.index) {
				item.cancellation_info_description = e.target.value
			}

			newArray.push(item)
		})

		this.setState({

			activity_cancellation_terms: newArray
		})
	}

	handleOnClickDeleteCancellation = async (e) => {
		let newArray = new Array()

		await this.state.activity_cancellation_terms.map((item, index) => {
			if (index != e.target.dataset.index) {
				newArray.push(
					item
				)
			}
		})



		this.setState({

			activity_cancellation_terms: newArray
		})
	}



	handleOnClickNewActionPlan = (e) => {

		let actionPlanArray = this.state.activity_action_plan

		actionPlanArray.push({
			action_plan_time_info: '',
			action_plan_description: ''
		})

		this.setState({

			activity_action_plan: actionPlanArray
		})

	}

	handleOnChangeActionPlan = async (e) => {
		let newArray = new Array()

		await this.state.activity_action_plan.map((item, index) => {
			if (index == e.target.dataset.index) {
				item[e.target.name] = e.target.value
			}

			newArray.push(item)
		})

		this.setState({

			activity_action_plan: newArray
		})
	}

	handleOnClickDeleteActionPlan = async (e) => {
		let newArray = new Array()

		await this.state.activity_action_plan.map((item, index) => {
			if (index != e.target.dataset.index) {
				newArray.push(
					item
				)
			}
		})



		this.setState({

			activity_action_plan: newArray
		})
	}



	handleOnClickNewAdditionalInfo = (e) => {

		let additionalInfoArray = this.state.activity_additional_informations

		additionalInfoArray.push({
			additional_info_title: '',
			additional_info_value: ''
		})

		this.setState({

			activity_additional_informations: additionalInfoArray
		})

	}

	handleOnChangeAdditionalInfo = async (e) => {
		let newArray = new Array()

		await this.state.activity_additional_informations.map((item, index) => {
			if (index == e.target.dataset.index) {
				item[e.target.name] = e.target.value
			}

			newArray.push(item)
		})

		this.setState({

			activity_additional_informations: newArray
		})
	}

	handleOnClickDeleteAdditionalInfo = async (e) => {
		let newArray = new Array()

		await this.state.activity_additional_informations.map((item, index) => {
			if (index != e.target.dataset.index) {
				newArray.push(
					item
				)
			}
		})



		this.setState({

			activity_additional_informations: newArray
		})
	}


	handleOnClickNewQuotaInfo = (e) => {

		let quotaInfoArray = this.state.activity_quota_informations

		quotaInfoArray.push({
			quota_info_date: '',
			quota_info_beginning_hour: '',
			quota_info_ending_hour: '',
			quota: '',
			quota_additional_price: 0
		})

		this.setState({

			activity_quota_informations: quotaInfoArray
		})

	}

	handleOnChangeQuotaInfo = async (e) => {
		let newArray = new Array()

		await this.state.activity_quota_informations.map((item, index) => {
			if (index == e.target.dataset.index) {
				item[e.target.name] = e.target.value
			}

			newArray.push(item)
		})

		this.setState({

			activity_quota_informations: newArray
		})
	}

	handleOnClickDeleteQuotaInfo = async (e) => {
		let newArray = new Array()

		await this.state.activity_quota_informations.map((item, index) => {
			if (index != e.target.dataset.index) {
				newArray.push(
					item
				)
			}
		})



		this.setState({

			activity_quota_informations: newArray
		})
	}







	render() {

		// render categories
		let categoriesHtml = this.state.categories.map((item) => {
			return (
				<option value={item._id}>{item.category_name}</option>
			)
		})

		// render cancellation info
		let cancellationInfoHtml = this.state.activity_cancellation_terms.map((item, index) => {
			return (
				<div className="row">
					<div className="col-md-4">
						<div class="form-group">
							<label>İptal Koşulu Açıklaması *</label>
							<input type="text" class="form-control" required name="cancellation_info_description" data-index={index} value={item.cancellation_info_description} onChange={this.handleOnChangeCancellation} placeholder="İptal koşulu açıklaması giriniz" />
						</div>
					</div>


					<div className="col-md-1">
						<label>İşlem</label>
						<button type="button" className="btn btn-danger" onClick={this.handleOnClickDeleteCancellation} data-index={index}><span className="fa fa-trash"></span></button>
					</div>
				</div>
			)
		})


		// render action plan
		let actionPlanHtml = this.state.activity_action_plan.map((item, index) => {
			return (
				<div className="row">
					<div className="col-md-4">
						<div class="form-group">
							<label>Hareket Saat Bilgisi *</label>
							<input type="text" class="form-control" required name="action_plan_time_info" data-index={index} value={item.action_plan_time_info} onChange={this.handleOnChangeActionPlan} placeholder="Hareket saat bilgisi giriniz" />
						</div>
					</div>
					<div className="col-md-7">
						<div class="form-group">
							<label>Hareket Açıklaması *</label>
							<input type="text" class="form-control" required name="action_plan_description" data-index={index} value={item.action_plan_description} onChange={this.handleOnChangeActionPlan} placeholder="Hareket açıklaması giriniz" />
						</div>
					</div>

					<div className="col-md-1">
						<label>İşlem</label>
						<button type="button" className="btn btn-danger" onClick={this.handleOnClickDeleteActionPlan} data-index={index}><span className="fa fa-trash"></span></button>
					</div>
				</div>
			)
		})


		// render additional info
		let additionalInfoHtml = this.state.activity_additional_informations.map((item, index) => {
			return (
				<div className="row">
					<div className="col-md-4">
						<div class="form-group">
							<label>Ek Bilgi başlığı *</label>
							<input type="text" class="form-control" required name="additional_info_title" data-index={index} value={item.additional_info_title} onChange={this.handleOnChangeAdditionalInfo} placeholder="Ek bilgi başlığı giriniz" />
						</div>
					</div>
					<div className="col-md-7">
						<div class="form-group">
							<label>Ek Bilgi Değeri *</label>
							<input type="text" class="form-control" required name="additional_info_value" data-index={index} value={item.additional_info_value} onChange={this.handleOnChangeAdditionalInfo} placeholder="Ek bilgi değeri giriniz" />
						</div>
					</div>

					<div className="col-md-1">
						<label>İşlem</label>
						<button type="button" className="btn btn-danger" onClick={this.handleOnClickDeleteAdditionalInfo} data-index={index}><span className="fa fa-trash"></span></button>
					</div>
				</div>
			)
		})


		// render quota info
		let quotaInfoHtml = this.state.activity_quota_informations.map((item, index) => {
			return (
				<div className="row">
					<div className="col-md-3">
						<div class="form-group">
							<label>Tarih *</label>
							<input type="date" class="form-control" required name="quota_info_date" data-index={index} value={item.quota_info_date} onChange={this.handleOnChangeQuotaInfo} placeholder="Aktivite kısa açıklaması giriniz" />
						</div>
					</div>
					<div className="col-md-2">
						<label>Başlangıç saati *</label>
						<select className="form-control" required name="quota_info_beginning_hour" data-index={index} value={item.quota_info_beginning_hour} onChange={this.handleOnChangeQuotaInfo}>
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
						<select className="form-control" required name="quota_info_ending_hour" data-index={index} value={item.quota_info_ending_hour} onChange={this.handleOnChangeQuotaInfo}>
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
							<input type="number" class="form-control" required name="quota" data-index={index} value={item.quota} onChange={this.handleOnChangeQuotaInfo} placeholder="Kontenjan giriniz" />
						</div>
					</div>
					<div className="col-md-1">
						<div class="form-group">
							<label>Ek Fiyat *</label>
							<input type="number" step=".01" class="form-control" required name="quota_additional_price" data-index={index} value={item.quota_additional_price} onChange={this.handleOnChangeQuotaInfo} placeholder="Kontenjan ek fiyatını giriniz" />
						</div>
					</div>
					<div className="col-md-1">
						<label>İşlem</label>
						<button type="button" onClick={this.handleOnClickDeleteQuotaInfo} data-index={index} className="btn btn-danger"><span className="fa fa-trash"></span></button>
					</div>
				</div>
			)
		})

		// render ckeditor
		let ckEditorHtml = ''
		if (this.state.categories.length > 0) {
			ckEditorHtml = (
				<CKEditor
					editor={ClassicEditor}
					data={this.state.activity_description}
					onReady={this.setCkEditor}
					onChange={this.handleCkEditorChange}
					config={{
						ckfinder: { uploadUrl: process.env.REACT_APP_API_ENDPOINT + "/file/upload" }
					}}
				/>
			)
		}

		// render multiple quota modal
		let modalMultipleQuotaModalJsx = ''
		if (this.state.multiple_quota_modal_visibility) {
			modalMultipleQuotaModalJsx = <ModalMultipleQuota handleOnSubmit={this.handleOnClickAddMoreQuota} />
		}

		return (
			<>
				{modalMultipleQuotaModalJsx}
				<form onSubmit={this.handleSubmit} method="POST">
					<h5>1. Aktivite Bilgileri</h5>
					<div class="form-group mt-4">
						<label>Aktivite Kategorisi</label>
						<select className="form-control" name="activity_category" value={this.state.activity_category._id} onChange={this.handleOnChange}>
							<option value="" selected disabled>Kategori Seçiniz</option>
							{categoriesHtml}
						</select>
					</div>
					<div class="form-group">
						<label>Aktivite Dili</label>
						<select className="form-control" name="activity_language" value={this.state.activity_language} onChange={this.handleOnChange}>
							<option value="" selected disabled>Dil Seçiniz</option>
							<option value="tr">Türkçe</option>
							<option value="en">İngilizce</option>
						</select>
					</div>
					<div class="form-group">
						<label>Aktivite Adı</label>
						<input type="text" class="form-control" name="activity_name" value={this.state.activity_name} onChange={this.handleOnChange} placeholder="Aktivite adı giriniz" />
					</div>
					<div class="form-group">
						<label>Aktivite Kısa Açıklaması</label>
						<input type="text" class="form-control" name="activity_short_description" value={this.state.activity_short_description} onChange={this.handleOnChange} placeholder="Aktivite kısa açıklaması giriniz" />
					</div>
					<div class="form-group">
						<label>Aktivite Görselleri <sup>İlk görsel kapak fotoğrafı olacaktır</sup> </label>
						<input type="file" multiple onChange={this.handleOnChange} class="form-control" />
					</div>
					<div class="form-group">
						<label>Aktivite Fiyat Birimi</label>
						<select className="form-control" name="activity_currency" value={this.state.activity_currency} onChange={this.handleOnChange}>
							<option value="" disabled selected>Birim seçiniz</option>
							<option value="₺">Türk Lirası</option>
							<option value="$">Amerikan Doları</option>
							<option value="€">Euro</option>
						</select>
					</div>
					<div class="form-group">
						<label>Aktivite Fiyatı <sup>Kişi başı fiyat giriniz</sup> </label>
						<input type="number" step=".01" class="form-control" name="activity_price" value={this.state.activity_price} onChange={this.handleOnChange} placeholder="Aktivite fiyatı giriniz" />
					</div>
					<div class="form-group">
						<label>Aktivite Detaylı Açıklaması</label>
						{ckEditorHtml}
					</div>

					<hr></hr>
					<h5>
						2. İptal & İade Bilgileri
					<button type="button" className="btn btn-success btn-sm ml-2" onClick={this.handleOnClickNewCancellation}><span className="fa fa-plus"></span></button>
					</h5>
					{cancellationInfoHtml}
					<hr></hr>
					<h5>
						3. Hareket Bilgileri
					<button type="button" className="btn btn-success btn-sm ml-2" onClick={this.handleOnClickNewActionPlan}><span className="fa fa-plus"></span></button>
					</h5>
					{actionPlanHtml}
					<hr></hr>
					<h5>
						4. Ek Bilgiler
					<button type="button" className="btn btn-success btn-sm ml-2" onClick={this.handleOnClickNewAdditionalInfo}><span className="fa fa-plus"></span></button>
					</h5>
					{additionalInfoHtml}
					<hr></hr>
					<h5>
						5. Kontenjan Bilgileri
					<button type="button" className="btn btn-success btn-sm ml-2" onClick={this.handleOnClickNewQuotaInfo}><span className="fa fa-plus"></span></button>
						<button className="btn btn-success ml-2 btn-sm" type="button" onClick={this.handleOnClickOpenMultipleQuotaModal}>Toplu kontenjan ekle</button>
					</h5>
					{quotaInfoHtml}
					<div class="form-group">
						<p><button type="submit" class="btn_1 medium">Kaydet</button></p>
					</div>
				</form>
			</>
		)
	}
}


export default FormActivity