import React from 'react'
import { getTranslatedString } from '../../controllers/controller'


const FormContact = () => {
	return (
		<form method="post" action="assets/contact.php" id="contactform" autocomplete="off">
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label>{getTranslatedString('name')}</label>
						<input class="form-control" type="text" id="contact_name" name="contact_name" />
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label>{getTranslatedString('surname')}</label>
						<input class="form-control" type="text" id="contact_surname" name="contact_surname" />
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label>{getTranslatedString('email_address')}</label>
						<input class="form-control" type="email" id="contact_email" name="contact_email" />
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label>{getTranslatedString('phone_number')}</label>
						<input class="form-control" type="text" id="contact_phone" name="contact_phone" />
					</div>
				</div>
			</div>
			<div class="form-group">
				<label>{getTranslatedString('message')}</label>
				<textarea class="form-control" id="contact_message" name="contact_message" style={{ height: '150px' }}></textarea>
			</div>
			<p class="add_top_30"><input type="submit" value={getTranslatedString('send')} class="btn_1 rounded" id="submit-contact" /></p>
		</form>
	)
}

export default FormContact