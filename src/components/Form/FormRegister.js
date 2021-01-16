import React from 'react'
import ElementScore from '../Element/ElementScore'


const FormRegister = () => {
	return (
		<form>
			<div class="sign-in-wrapper">
				<div class="form-group">
					<label>Adınız</label>
					<input type="text" id="register_user_name" name="register_user_name" class="form-control" />
					<i class="ti-user"></i>
				</div>
				<div class="form-group">
					<label>Soyadınız</label>
					<input type="text" id="register_user_surname" name="register_user_surname" class="form-control" />
					<i class="ti-user"></i>
				</div>
				<div class="form-group">
					<label>E-posta</label>
					<input type="register_user_email" class="form-control" name="register_user_email" id="register_user_email" />
					<i class="icon_mail_alt"></i>
				</div>
				<div class="form-group">
					<label>Parola</label>
					<input type="register_user_password" class="form-control" name="register_user_password" id="register_user_password" value="" />
					<i class="icon_lock_alt"></i>
				</div>
				<div class="form-group">
					<label>Parola (Tekrar)</label>
					<input type="register_user_password_repeat" class="form-control" name="register_user_password_repeat" id="register_user_password_repeat" value="" />
					<i class="icon_lock_alt"></i>
				</div>
				<div class="text-center"><input type="submit" value="Kayıt Ol" class="btn_1 full-width" /></div>

			</div>
		</form>
	)
}

export default FormRegister