import React, { Component } from 'react'
import api from '../../services/api'
import ElementScore from '../Element/ElementScore'


class FormFilterActivity extends Component {


	constructor() {
		super()

		this.state = {
			categories: [],
			is_categories_loaded: false,
			activity_name: '',
			activity_category: ''
		}


		this.handleOnChange = this.handleOnChange.bind(this)
		this.handleOnSubmit = this.handleOnSubmit.bind(this)
	}


	async componentDidMount(){
		const categories = await api.get('/category/list/1')

		this.setState({
			categories: categories.data.docs,
			is_categories_loaded: true
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
			activity_name: this.state.activity_name,
			"activity_category._id": this.state.activity_category
		}

		this.props.getActivities(1, filters)
	}

	render() {

		// render categories
		let categoriesHtml = ''
		if (this.state.is_categories_loaded) {
			categoriesHtml = this.state.categories.map((item) => {
				return(
					<option value={item._id}>{item.category_name}</option>
				)
			})
		}else{
			categoriesHtml = (
				<option value="">Kategoriler yükleniyor...</option>
			)
		}
		console.log(this.state);
		
		return (
			<form className="form-inline" onSubmit={this.handleOnSubmit}>
				<div className="custom-search-input-2 inner-2" style={{ display: 'inline-flex' }}>
					<div className="form-group">
						<input className="form-control" type="text" onChange={this.handleOnChange} name="activity_name" value={this.activity_name} placeholder="Aktivite adı ile ara..." />
						<i className="icon_search"></i>
					</div>
					<div className="form-group">
						<select className="form-control wide" onChange={this.handleOnChange} name="activity_category" value={this.activity_category}>
							<option value="">Tüm Kategoriler</option>
							{categoriesHtml}
						</select>
					</div>
					<input type="submit" className="btn_search mt-0" value="Ara" />
				</div>
			</form>

		)
	}

}

export default FormFilterActivity