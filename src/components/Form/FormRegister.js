import React, { Component } from 'react'
import Swal from 'sweetalert2'
import api from '../../services/api'
import ElementScore from '../Element/ElementScore'


class FormRegister extends Component {

	constructor(){
		super()
		this.state = {
			register_customer_name: '',
			register_customer_surname: '',
			register_customer_email: '',
			register_customer_phone_number: '',
			register_customer_password: '',
			register_customer_password_repeat: '',
			is_form_submitting: false
		}
	
		this.handleOnSubmit = this.handleOnSubmit.bind(this)
		this.handleOnChange = this.handleOnChange.bind(this)
	}


	handleOnChange = (e) => {
        
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }
	async handleOnSubmit(e){
		e.preventDefault()
	

		const data = {
			customer_name: this.state.register_customer_name,
			customer_surname: this.state.register_customer_surname,
			customer_email: this.state.register_customer_email,
			customer_phone_number: this.state.register_customer_phone_number,
			customer_password: this.state.register_customer_password
		}


		const submitResponse = await api.post('/customer/register', data)

		if (submitResponse.data.response == true) {
			Swal.fire({
				title: "Başarılı!",
				text: "Kaydınız oluşturulmuştur",
				icon: 'success'
			})
			this.context.updateState('register_modal_visibility', false, ()=>{})
		}else{
			Swal.fire({
				title: "Hata!",
				text: submitResponse.data.responseData,
				icon: 'error'
			})
		}

	}

	render(){
		return (
			<form onSubmit={this.handleOnSubmit} method="POST">
				<div class="sign-in-wrapper">
					<div class="form-group">
						<label>Adınız *</label> 
						<input type="text" id="register_customer_name" required name="register_customer_name" class="form-control" onChange={this.handleOnChange} value={this.state.register_customer_name} />
						<i class="ti-customer"></i>
					</div>
					<div class="form-group">
						<label>Soyadınız *</label>
						<input type="text" id="register_customer_surname" required name="register_customer_surname" class="form-control" onChange={this.handleOnChange} value={this.state.register_customer_surname} />
						<i class="ti-customer"></i>
					</div>
					<div class="form-group">
						<label>E-posta *</label>
						<input type="email" class="form-control" required onChange={this.handleOnChange} value={this.state.register_customer_email} name="register_customer_email" id="register_customer_email" />
						<i class="icon_mail_alt"></i>
					</div>
					<div class="form-group">
						<label>Telefon Numarası * </label>
						<input type="number" class="form-control" required onChange={this.handleOnChange} value={this.state.register_customer_phone_number} name="register_customer_phone_number" id="register_customer_email" />
						<i class="icon_mobile_phone_alt"></i>
					</div>
					<div class="form-group">
						<label>Parola *</label>
						<input type="password" class="form-control" required onChange={this.handleOnChange} value={this.state.register_customer_password} name="register_customer_password" id="register_customer_password" />
						<i class="icon_lock_alt"></i>
					</div>
					<div class="form-group">
						<label>Parola (Tekrar) *</label>
						<input type="password" class="form-control" required onChange={this.handleOnChange} value={this.state.register_customer_password_repeat} name="register_customer_password_repeat" id="register_customer_password_repeat" />
						<i class="icon_lock_alt"></i>
					</div>
					<div class="text-center">
						<input type="submit" value="Kayıt Ol" class="btn_1 full-width" />
					</div>
	
				</div>
			</form>
		)
	}
	
}

export default FormRegister