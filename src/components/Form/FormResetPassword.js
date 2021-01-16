import React from 'react'


const FormResetPassword = () => {
	return (
		<form>
			<div class="sign-in-wrapper">
				<div class="form-group">
					<label>Yeni Parolanız</label>
					<input type="text" id="reset_password_new_password" name="reset_password_new_password" class="form-control" />
					
				</div>
				<div class="form-group">
					<label>Yeni Parolanız (Tekrar)</label>
					<input type="text" id="reset_password_new_password_repeat" name="reset_password_new_password_repeat" class="form-control" />
					
				</div>
				
				<div class="text-center"><input type="submit" value="Parolamı Sıfırla" class="btn_1 full-width" /></div>

			</div>
		</form>
	)
}

export default FormResetPassword