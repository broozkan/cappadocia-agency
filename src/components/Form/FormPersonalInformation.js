import React from 'react'
import AsideTotalPayment from '../Aside/AsideTotalPayment'
import ElementScore from '../Element/ElementScore'
import MessageExistingCustomer from '../Message/MessageExistingCustomer'


const FormPersonalInformation = () => {
    return (
        <form>


                    <div class="box_cart">
                        <div class="form_title pl-0">
                            <h3>Bilgileriniz</h3>
                            <p>Size ulaşabilmemiz adına lütfen bilgilerinizin doğruluğundan emin olun</p>
                        </div>
                        <div>
                            <div class="row mt-4">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Adınız *</label>
                                        <input type="text" class="form-control" id="payment_user_name" name="payment_user_name" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Soyadınız *</label>
                                        <input type="text" class="form-control" id="payment_user_surname" name="payment_user_surname" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>E-Posta adresiniz *</label>
                                        <input type="email" id="payment_user_email" name="payment_user_email" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Telefon Numaranız *</label>
                                        <input type="email" id="payment_user_phone_number" name="payment_user_phone_number" class="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Notunuz</label>
                                        <input type="text" id="payment_note" name="payment_note" class="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>

                    </div>

        </form>
    )
}

export default FormPersonalInformation