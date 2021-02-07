import React, { Component } from 'react'
import api from '../../services/api'


class FormResearchBooking extends Component {

	constructor(){
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

	async componentDidMount(){
		const urlParams = this.props.params
		
		if (urlParams) {
			this.setState({
				category_id: urlParams.category_id,
				activity_checkout_date: urlParams.activity_checkout_date,
				mature_count: urlParams.mature_count,
				child_count: urlParams.child_count
			})
		}
		

		this.getCategories()
	}

	handleOnChange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	async getCategories(){
		const categories = await api.get('/category/list/1')

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
				return(
					<option value={item._id}>{item.category_name}</option>
				)
			})
		}else{
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
								{optionCategoriesHtml}
							</select>
							<i class="icon_search"></i>
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
								<option value="" disabled selected>Yetişkin Sayısı</option>
								<option value="1">1 Yetişkin</option>
								<option value="2">2 Yetişkin</option>
								<option value="3">3 Yetişkin</option>
								<option value="4">4 Yetişkin</option>
							</select>
							<i class="icon_profile"></i>
						</div>
					</div>
					<div class="col-lg-2">
						<select class="wide form-control" name="child_count" onChange={this.handleOnChange} value={this.state.child_count}>
						<option value="" disabled selected>Çocuk Sayısı</option>
							<option value="0">0 çocuk</option>
							<option value="1">1 çocuk</option>
							<option value="2">2 çocuk</option>
							<option value="3">3 çocuk</option>
							<option value="4">4 çocuk</option>
						</select>
						<i class="icon_profile"></i>

					</div>
					<div class="col-lg-2">
						<input type="submit" class="btn_search" value="Ara" />
					</div>
				</div>
			</form>
		)
	}

}

export default FormResearchBooking