import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { AdminContext } from '../../contexts/site/AdminContext'
import api from '../../services/api'
import ElementScore from '../Element/ElementScore'


class FormLoginAdmin extends Component {

	static contextType = AdminContext

	constructor() {
		super()
		this.state = {
			user_username: '',
			user_password: '',
			is_form_submitting: false
		}
		this.handleOnSubmit = this.handleOnSubmit.bind(this)
		this.handleOnChange = this.handleOnChange.bind(this)
	}


	handleOnChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	async handleOnSubmit(e) {
		e.preventDefault()

        const submitResponse = await api.post('/user/login/', {}, {auth:{ username: this.state.user_username,password: this.state.user_password }})


		if(submitResponse.data.response){
            localStorage.setItem('admin-auth', submitResponse.data.token)
			localStorage.setItem('admin_user', JSON.stringify(submitResponse.data.responseData[0]))
			this.context.updateState('is_user_logged_in', true, () => {
				window.location.href = '/admin'
			})
		
			
		
			
		}else{
			Swal.fire({
				title: 'Hata',
				text: submitResponse.data.responseData,
				icon: 'error'
			})
		}

	}



	render() {

		console.log(this.context);

		return (
			<form method="POST" onSubmit={this.handleOnSubmit}>
				<div class="sign-in-wrapper">
					<div class="form-group">
						<label>Kullanıcı Adı</label>
						<input type="text" class="form-control" onChange={this.handleOnChange} value={this.state.user_username} name="user_username" id="user_username" />
						<i class="icon_mail_alt"></i>
					</div>
					<div class="form-group">
						<label>Parola</label>
						<input type="password" class="form-control" onChange={this.handleOnChange} value={this.state.user_password} name="user_password" id="user_password" />
						<i class="icon_lock_alt"></i>
					</div>
					<div class="clearfix add_bottom_15">
						<div class="checkboxes float-left">
							<label class="container_check">Beni hatırla
						  <input type="checkbox" />
								<span class="checkmark"></span>
							</label>
						</div>
					</div>
					<div class="text-center"><input type="submit" value="Giriş Yap" class="btn_1 full-width" /></div>
				
				</div>
			</form>
		)
	}

}

export default FormLoginAdmin