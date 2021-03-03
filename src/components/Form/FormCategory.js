import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Swal from 'sweetalert2'

const FormCategory = (props) => {


	const [state, setState] = useState({
		category_language: 'tr',
		category_name: '',
		category_description: '',
		category_header_visibility: false,
		is_form_submitting: false
	})

	useEffect(()=>{
		if(props.category_id){
			getCategory()
		}
	},[])


	const resetState = () => {
		setState({
			category_language: 'tr',
			category_name: '',
			category_description: '',
			category_header_visibility: false,
			is_form_submitting: false
		})
	}
	
	const getCategory = async () => {
		const category = await api.get('/category/get/'+props.category_id)

		setState({
			...state,
			category_language: category.data.category_language,
			category_name: category.data.category_name,
			category_description: category.data.category_description,
			category_header_visibility: category.data.category_header_visibility
		})
	}

	const handleOnChange = (e) => {
		if (e.target.type === "checkbox") {
			setState({
				...state,
				[e.target.name]: e.target.checked
			})
		}else{
			setState({
				...state,
				[e.target.name]: e.target.value
			})
		}
		
	}


	const handleOnSubmit = async (e) => {

		e.preventDefault()

		setState({
			...state,
			is_form_submitting: true
		})

		const formData = {
			category_language: state.category_language,
			category_name: state.category_name,
			category_description: state.category_description,
			category_header_visibility: state.category_header_visibility
		}
		
		let submitResponse
		if(props.category_id){
			submitResponse = await api.put('/category/update/'+props.category_id, formData)
		}else{
			submitResponse = await api.post('/category/new', formData)
		}

		if(submitResponse.data.response){
			Swal.fire({
				title: 'Başarılı',
				text: 'Kategori eklendi',
				icon: 'success'
			})
			resetState()
		}else{
			Swal.fire({
				title: 'Hata',
				text: submitResponse.data.responseData,
				icon: 'error'
			})

			setState({
				...state,
				is_form_submitting: false
			})
		}

	}

	console.log(state);
	
	return (
		<form onSubmit={handleOnSubmit}>
			<div class="form-group">
				<label>Kategori Dili *</label>
				<select className="form-control" name="category_language" value={state.category_language} onChange={handleOnChange}>
					<option value="" disabled selected>Dil seçiniz</option>
					<option value="tr">Türkçe</option>
					<option value="en">İngilizce</option>
				</select>
			</div>
			<div class="form-group">
				<label>Kategori Adı *</label>
				<input type="text" class="form-control" required name="category_name" onChange={handleOnChange} value={state.category_name} placeholder="Kategori adı giriniz" />
			</div>
			<div class="form-group">
				<label>Kategori Açıklaması *</label>
				<input type="text" class="form-control" required name="category_description" onChange={handleOnChange} value={state.category_description} placeholder="Kategori açıklaması giriniz" />
			</div>
			<div class="clearfix add_bottom_15">
				<div class="checkboxes float-left">
					<label class="container_check"> Ana sayfada görünsün
						  <input type="checkbox" name="category_header_visibility" onChange={handleOnChange} checked={state.category_header_visibility} />
						<span class="checkmark"></span>
					</label>
				</div>
			</div>
			<div class="form-group">
				<p><button type="submit" class="btn_1 medium">Kaydet</button></p>
			</div>
		</form>
	)
}

export default FormCategory