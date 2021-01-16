import React from 'react'
import ElementScore from '../Element/ElementScore'


const FormLoginSite = () => {
	return (
		<form>
			<div class="sign-in-wrapper">
				<div class="form-group">
					<label>E-posta</label>
					<input type="user_email" class="form-control" name="user_email" id="user_email" />
					<i class="icon_mail_alt"></i>
				</div>
				<div class="form-group">
					<label>Parola</label>
					<input type="user_password" class="form-control" name="user_password" id="user_password" value="" />
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
				<div class="text-center"><input type="submit" value="Log In" class="btn_1 full-width" /></div>
				<div class="text-center">
					Hesabınız yok mu? <a href="register.html">Kayıt olun</a>
				</div>
				<div id="forgot_pw">
					<div class="form-group">
						<label>Please confirm login email below</label>
						<input type="email" class="form-control" name="email_forgot" id="email_forgot" />
						<i class="icon_mail_alt"></i>
					</div>
					<p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
					<div class="text-center"><input type="submit" value="Reset Password" class="btn_1" /></div>
				</div>
			</div>
		</form>
	)
}

export default FormLoginSite