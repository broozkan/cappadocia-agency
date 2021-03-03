import React from 'react'
import { getTranslatedString } from '../../controllers/controller'


const FormLeaveReview = () => {
    return (
        <form>
            <div class="row">
                <div class="form-group col-md-6">
                    <label>{getTranslatedString('name')} {getTranslatedString('surname')} *</label>
                    <input type="text" name="review_name_surname" id="review_name_surname" placeholder="" class="form-control" />
                </div>
                <div class="form-group col-md-6">
                    <label>{getTranslatedString('email_address')} *</label>
                    <input type="email" name="review_email" id="review_email" class="form-control" />
                </div>
                <div class="form-group col-md-6">
                    <label>{getTranslatedString('form_leave_review_your_rating')} </label>
                    <select name="rating_review" className="form-control wide" id="rating_review">
                        <option value="1">1 (lowest)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5" selected>5 (medium)</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10 (highest)</option>
                    </select>
                </div>
                <div class="form-group col-md-12">
                    <label>{getTranslatedString('form_leave_review_your_review')}</label>
                    <textarea name="review_text" id="review_text" class="form-control" style={{ height: '130px' }}></textarea>
                </div>
                <div class="form-group col-md-12 add_top_20">
                    <input type="submit" value={getTranslatedString('send')} class="btn_1" id="submit-review" />
                </div>
            </div>
        </form>
    )
}

export default FormLeaveReview