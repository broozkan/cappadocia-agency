import React, { Component } from 'react'
import { CommonContext } from '../../contexts/site/CommonContext'
import { getTranslatedString } from '../../controllers/controller'
import api from '../../services/api'


class FormResearchBooking extends Component {


	constructor() {
		super()

		this.state = {
			categories: [],
			category_id: '',
			activity_checkout_date: '',
			mature_count: '',
			child_count: '',
			is_categories_loaded: false
		}

		this.handleOnChange = this.handleOnChange.bind(this)
	}

	async componentDidMount() {
		if (!localStorage.getItem('language')) {
			localStorage.setItem('language', 'tr')
		}

		const urlParams = this.props.params

		if (urlParams) {
			this.setState({
				category_id: urlParams.category_id,
				activity_checkout_date: urlParams.activity_checkout_date,
				mature_count: urlParams.mature_count,
				child_count: urlParams.child_count
			})
		} else {
			const date = new Date()
			const today = date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2)
			this.setState({
				activity_checkout_date: today
			})
		}


		this.getCategories()
	}

	handleOnChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	async getCategories() {
		console.log(localStorage.getItem('language'));
		const categories = await api.get('/category/list/1', {params: {category_language: localStorage.getItem('language')}})

		this.setState({
			categories: categories.data.docs,
			is_categories_loaded: true
		})
	}


	render() {
		console.log(this.state);
		// render categories options
		let optionCategoriesHtml = ''
		if (this.state.is_categories_loaded) {
			optionCategoriesHtml = this.state.categories.map((item) => {
				return (
					<option value={item._id}>{item.category_name}</option>
				)
			})
		} else {
			optionCategoriesHtml = (
				<option>Kategoriler yükleniyor...</option>
			)
		}


		return (
			<form className="form-research-booking" method="GET" action="/seferler">
				<div class="row no-gutters custom-search-input-2 inner">
					<div class="col-lg-4">
						<div class="form-group">
							<select class="wide form-control" onChange={this.handleOnChange} name="category_id" value={this.state.category_id}>
								<option value="" disabled selected>{getTranslatedString('form_research_select_default')}</option>
								{optionCategoriesHtml}
							</select>
							<i class="fa fa-search"></i>
						</div>
					</div>
					<div className="col-lg-2">
						<div className="form-group">
							<input className="form-control" name="activity_checkout_date" type="date" onChange={this.handleOnChange} value={this.state.activity_checkout_date} />

						</div>
					</div>
					<div class="col-lg-2">
						<div class="form-group">
							<select class="wide form-control" name="mature_count" onChange={this.handleOnChange} value={this.state.mature_count}>
								<option value="" disabled selected>{getTranslatedString('form_research_mature')} {getTranslatedString('form_research_count')}</option>
								<option value="1">1 {getTranslatedString('form_research_mature')}</option>
								<option value="2">2 {getTranslatedString('form_research_mature')}</option>
								<option value="3">3 {getTranslatedString('form_research_mature')}</option>
								<option value="5">5 {getTranslatedString('form_research_mature')}</option>
								<option value="6">6 {getTranslatedString('form_research_mature')}</option>
								<option value="7">7 {getTranslatedString('form_research_mature')}</option>
								<option value="8">8 {getTranslatedString('form_research_mature')}</option>
								<option value="9">9 {getTranslatedString('form_research_mature')}</option>
								<option value="10">10 {getTranslatedString('form_research_mature')}</option>
							</select>
							<i class="fa fa-user"></i>
						</div>
					</div>
					<div class="col-lg-2">
						<select class="wide form-control" name="child_count" onChange={this.handleOnChange} value={this.state.child_count}>
							<option value="" disabled selected>{getTranslatedString('form_research_child')} {getTranslatedString('form_research_count')}</option>
							<option value="0">0 {getTranslatedString('form_research_child')}</option>
							<option value="1">1 {getTranslatedString('form_research_child')}</option>
							<option value="2">2 {getTranslatedString('form_research_child')}</option>
							<option value="3">3 {getTranslatedString('form_research_child')}</option>
							<option value="4">4 {getTranslatedString('form_research_child')}</option>
						</select>
						<i class="fa fa-user"></i>

					</div>
					<div class="col-lg-2">
						<input type="submit" class="btn_search" value={getTranslatedString('form_research_search')} />
					</div>
				</div>
			</form>
		)
	}

}

export default FormResearchBooking