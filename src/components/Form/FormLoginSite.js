import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { CommonContext } from '../../contexts/site/CommonContext'
import api from '../../services/api'
import ElementScore from '../Element/ElementScore'


class FormLoginSite extends Component {

	static contextType = CommonContext

	constructor() {
		super()
		this.state = {
			customer_email: '',
			customer_password: '',
			is_form_submitting: false
		}
		this.handleOnSubmit = this.handleOnSubmit.bind(this)
		this.handleOnChange = this.handleOnChange.bind(this)
		this.handleOnClickOpenRegister = this.handleOnClickOpenRegister.bind(this)
	}


	handleOnChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	async handleOnSubmit(e) {
		e.preventDefault()

        const submitResponse = await api.post('/customer/login/', {}, {auth:{ username: this.state.customer_email,password: this.state.customer_password }})


		if(submitResponse.data.response){
            localStorage.setItem('site-auth', submitResponse.data.token)
			localStorage.setItem('customer', JSON.stringify(submitResponse.data.responseData[0]))
			this.context.updateState('is_user_logged_in', true, () => {})
		
			this.context.updateState('login_modal_visibility', false, () => {
				Swal.fire({
					title: 'Başarılı',
					text: 'Giriş yapıldı',
					icon: 'success'
				})
			})
		
			
		}else{
			Swal.fire({
				title: 'Hata',
				text: submitResponse.data.responseData,
				icon: 'error'
			})
		}

	}


	handleOnClickOpenRegister(e){
		e.preventDefault()

		this.context.updateState('login_modal_visibility', false, () => {
			this.context.updateState('register_modal_visibility', true, () => {})

		})
	}

	render() {

		return (
			<form method="POST" onSubmit={this.handleOnSubmit}>
				<div class="sign-in-wrapper">
					<div class="form-group">
						<label>E-posta</label>
						<input type="email" class="form-control" onChange={this.handleOnChange} value={this.state.customer_email} name="customer_email" id="customer_email" />
						<i class="icon_mail_alt"></i>
					</div>
					<div class="form-group">
						<label>Parola</label>
						<input type="password" class="form-control" onChange={this.handleOnChange} value={this.state.customer_password} name="customer_password" id="customer_password" />
						<i class="icon_lock_alt"></i>
					</div>
					<div class="clearfix add_bottom_15">
						<div class="checkboxes float-left">
							<label class="container_check">Beni hatırla
						  <input type="checkbox" />
								<span class="checkmark"></span>
							</label>
						</div>
						<div class="float-right mt-1"><a id="forgot" href="javascript:void(0);">Parolanızı mı unuttunuz?</a></div>
					</div>
					<div class="text-center"><input type="submit" value="Giriş Yap" class="btn_1 full-width" /></div>
					<div class="text-center">
						Hesabınız yok mu? <a href="#" onClick={this.handleOnClickOpenRegister}>Hızlıca kayıt olun</a>
					</div>
				</div>
			</form>
		)
	}

}

export default FormLoginSite