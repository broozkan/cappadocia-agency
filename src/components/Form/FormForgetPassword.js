import React from 'react'


const FormForgetPassword = () => {
	return (
		<form>
			<div>
				<div class="form-group">
					<label>Kayıtlı e-posta adresinizi girin</label>
					<input type="email" class="form-control" name="forget_password_email" id="forget_password_email" />
					<i class="icon_mail_alt"></i>
				</div>
				<p>İşlem sonucunda parola sıfırlama bağlantısı alacaksınız</p>
				<div class="text-center"><input type="submit" value="Parola Sıfırlama Bağlantısı Gönder" class="btn_1" /></div>
			</div>
		</form>
	)
}

export default FormForgetPassword