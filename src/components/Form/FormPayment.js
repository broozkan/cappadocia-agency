import React from 'react'
import AsideTotalPayment from '../Aside/AsideTotalPayment'
import ElementScore from '../Element/ElementScore'
import MessageExistingCustomer from '../Message/MessageExistingCustomer'


const FormPayment = () => {
    return (
        <form>
                        <div class="row" style={{ transform: 'none' }}>


                                <div class="col-lg-8">
                                    <div class="box_cart">
                                        <MessageExistingCustomer />
                                        <div class="form_title">
                                            <h3><strong>1</strong>Bilgileriniz</h3>
                                            <p>Size ulaşabilmemiz adına lütfen bilgilerinizin doğruluğundan emin olun</p>
                                        </div>
                                        <div class="step">
                                            <div class="row">
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

                                        <div class="form_title">
                                            <h3><strong>2</strong>Ödeme Bilgileri</h3>
                                            <p>SSL güvenlik sertifikası ile kart bilgilerinizi koruyor ve saklamıyoruz.</p>
                                        </div>
                                        <div class="step">
                                            <div class="form-group">
                                                <label>Kart üzerindeki isim</label>
                                                <input type="text" class="form-control" id="payment_cart_name" name="payment_cart_name" />
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 col-sm-12">
                                                    <div class="form-group">
                                                        <label>Kart Numarası</label>
                                                        <input type="text" id="payment_cart_number" name="payment_cart_number" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-sm-12">
                                                    <img src="img/cards_all.svg" alt="Cards" class="cards-payment" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Sok kullanma Tarihi</label>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <input type="text" id="payment_cart_expiration_month" name="payment_cart_expiration_month" class="form-control" placeholder="MM" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <input type="text" id="payment_cart_expiration_year" name="payment_cart_expiration_year" class="form-control" placeholder="Yıl" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>CCV</label>
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <div class="form-group">
                                                                    <input type="text" id="ccv" name="ccv" class="form-control" placeholder="CCV" />
                                                                </div>
                                                            </div>
                                                            <div class="col-8">
                                                                <img src="img/icon_ccv.gif" width="50" height="29" alt="ccv" /><small>3 haneli kod</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                           
                                        </div>
                                        <hr></hr>

                                        <div class="form_title">
                                            <h3><strong>3</strong>Fatura Adresi</h3>
                                            <p>Fatura bilgilerinizi giriniz</p>
                                        </div>
                                        <div class="step">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label>Ülke</label>
                                                        <div class="">
                                                            <select class="wide add_bottom_15 form-control" name="payment_billing_country" id="payment_billing_country" >
                                                                <option value="" selected="">Ülke seçiniz</option>
                                                                <option value="Europe">Europe</option>
                                                                <option value="United states">United states</option>
                                                                <option value="South America">South America</option>
                                                                <option value="Oceania">Oceania</option>
                                                                <option value="Asia">Asia</option>
                                                            </select>
														
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label>Adres 1</label>
                                                        <input type="text" id="payment_billing_address_1" name="payment_billing_address_1" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label>Adres 2</label>
                                                        <input type="text" id="payment_billing_address_2" name="payment_billing_address_2" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 col-sm-12">
                                                    <div class="form-group">
                                                        <label>Şehir</label>
                                                        <input type="text" id="payment_billing_city" name="payment_billing_city" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-sm-6">
                                                    <div class="form-group">
                                                        <label>İlçe</label>
                                                        <input type="text" id="payment_billing_state" name="payment_billing_state" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-sm-6">
                                                    <div class="form-group">
                                                        <label>Posta Kodu</label>
                                                        <input type="text" id="payment_billing_postal_code" name="payment_billing_postal_code" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div id="policy">
                                            <h5>İptal Politikası</h5>
                                            <p class="nomargin">Satın aldığınız paketin iptal politikası dahilindedir <a href="#0">Ürüne ait iptal politikasına</a> tıklayarak ulaşabilirsiniz. </p>
                                        </div>
                                    </div>
                                </div>

                                <AsideTotalPayment />
                        </div>
                        </form>
    )
}

export default FormPayment