import React, { useState } from 'react'
import api from '../../services/api'
import Swal from 'sweetalert2'

const FormCategory = () => {


	const [state, setState] = useState({
		category_name: '',
		is_form_submitting: false
	})


	const resetState = () => {
		setState({
			category_name: '',
			is_form_submitting: false
		})
	}
	

	const handleOnChange = (e) => {
		setState({
			[e.target.name]: e.target.value
		})
	}


	const handleOnSubmit = async (e) => {

		e.preventDefault()

		setState({
			...state,
			is_form_submitting: true
		})

		const formData = {
			category_name: state.category_name
		}
		
		const submitResponse = await api.post('/category/new', formData)

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


	
	return (
		<form onSubmit={handleOnSubmit}>
			<div class="form-group">
				<label>Kategori Adı *</label>
				<input type="text" class="form-control" required name="category_name" onChange={handleOnChange} value={state.category_name} placeholder="Kategori adı giriniz" />
			</div>
			<div class="form-group">
				<p><a href="#0" class="btn_1 medium">Kaydet</a></p>
			</div>
		</form>
	)
}

export default FormCategory