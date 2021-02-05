import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { CommonContext } from '../../contexts/site/CommonContext'
import api from '../../services/api'
import AsideTotalPayment from '../Aside/AsideTotalPayment'
import ElementScore from '../Element/ElementScore'
import MessageExistingCustomer from '../Message/MessageExistingCustomer'


class FormPayment extends Component {
    static contextType = CommonContext

    constructor() {
        super()

        this.state = {
            payment_customer_name: '',
            payment_customer_surname: '',
            payment_customer_email: '',
            payment_customer_phone_number: '',
            payment_note: '',
            payment_method: 'online',
            payment_cart_name: '',
            payment_cart_number: '',
            payment_cart_expiration_month: '',
            payment_cart_expiration_year: '',
            payment_cart_ccv: '',
            payment_billing_country: '',
            payment_billing_address_1: '',
            payment_billing_address_2: '',
            payment_billing_city: '',
            payment_billing_postal_code: '',
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    componentDidMount(){
        const customer = JSON.parse(localStorage.getItem('customer'))
        console.log(customer);
        this.setState({
            payment_customer_name: customer.customer_name,
            payment_customer_surname: customer.customer_surname,
            payment_customer_email: customer.customer_email,
            payment_customer_phone_number: customer.customer_phone_number
        })
    }

    handleOnChange(e) {

        if (e.target.type === "checkbox") {
            if (e.target.value == "cash") {
                this.setState({
                    payment_method: 'online'
                })
            } else {
                this.setState({
                    payment_method: 'cash'
                })
            }
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

    }


    async handleOnSubmit(e){
        e.preventDefault()
        console.log(this.context.basket_items);
      
        const data = {
            reservation_payment_method: this.state.payment_method,
            reservation_basket: this.context.state.basket_items,
            payment_customer_name: this.state.payment_customer_name,
            payment_customer_surname: this.state.payment_customer_surname,
            payment_customer_email: this.state.payment_customer_email,
            payment_customer_phone_number: this.state.payment_customer_phone_number,
            payment_cart_name: this.state.payment_cart_name,
            payment_cart_number: this.state.payment_cart_number,
            payment_cart_expiration_month: this.state.payment_cart_expiration_month,
            payment_cart_expiration_year: this.state.payment_cart_expiration_year,
            payment_cart_ccv: this.state.payment_cart_ccv,
            payment_billing_country: this.state.payment_billing_country,
            payment_billing_address_1: this.state.payment_billing_address_1,
            payment_billing_address_2: this.state.payment_billing_address_2,
            payment_billing_city: this.state.payment_billing_city,
            payment_billing_postal_code: this.state.payment_billing_postal_code,
            payment_total: this.context.basket_total
        }

        const submitResponse = await api.post('/reservation/new', data, {headers: {'site-token':localStorage.getItem('site-auth')}})

        if (submitResponse.data.response) {
            Swal.fire({
                title: 'Başarılı',
                text: 'Rezervasyonunuz alındı',
                icon: 'success'
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

        console.log(this.state);

        // render card form html according to payment method
        let paymentFieldHtml = ''
        if (this.state.payment_method == "cash") {
            paymentFieldHtml = (
                <div className="form-group">
                    <h5> <span className="fa fa-warning"></span> Ödemeyi aktivite öncesi ekibimiz sizden tahsil edecektir.</h5>

                </div>
            )
        } else {
            paymentFieldHtml = (
                <>
                    <div class="form-group">
                        <label>Kart üzerindeki isim *</label>
                        <input type="text" class="form-control" required onChange={this.handleOnChange} id="payment_cart_name" name="payment_cart_name" />
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label>Kart Numarası *</label>
                                <input type="text" id="payment_cart_number" name="payment_cart_number" class="form-control" required onChange={this.handleOnChange} />
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <img src="img/cards_all.svg" alt="Cards" class="cards-payment" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Sok kullanma Tarihi *</label>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" id="payment_cart_expiration_month" name="payment_cart_expiration_month" class="form-control" required onChange={this.handleOnChange} placeholder="MM" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" id="payment_cart_expiration_year" name="payment_cart_expiration_year" class="form-control" required onChange={this.handleOnChange} placeholder="Yıl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>CCV *</label>
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group">
                                            <input type="text" id="ccv" name="payment_cart_ccv" class="form-control" required onChange={this.handleOnChange} placeholder="CCV" />
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <img src="img/icon_ccv.gif" width="50" height="29" alt="ccv" /><small>3 haneli kod</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

        return (
            <form method="POST" onSubmit={this.handleOnSubmit}>
                <div class="row" style={{ transform: 'none' }}>


                    <div class="col-lg-8">
                        <div class="box_cart">
                            <div class="form_title">
                                <h3><strong>1</strong>Bilgileriniz</h3>
                                <p>Size ulaşabilmemiz adına lütfen bilgilerinizin doğruluğundan emin olun</p>
                            </div>
                            <div class="step">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Adınız *</label>
                                            <input type="text" class="form-control" required onChange={this.handleOnChange} id="payment_customer_name" name="payment_customer_name" value={this.state.payment_customer_name} />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Soyadınız *</label>
                                            <input type="text" class="form-control" required onChange={this.handleOnChange} id="payment_customer_surname" name="payment_customer_surname" value={this.state.payment_customer_surname} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>E-Posta adresiniz *</label>
                                            <input type="email" id="payment_customer_email" name="payment_customer_email" class="form-control" required onChange={this.handleOnChange}  value={this.state.payment_customer_email}/>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Telefon Numaranız *</label>
                                            <input type="text" id="payment_customer_phone_number" name="payment_customer_phone_number" class="form-control" required onChange={this.handleOnChange} value={this.state.payment_customer_phone_number} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Notunuz</label>
                                            <input type="text" id="payment_note" name="payment_note" class="form-control" onChange={this.handleOnChange} value={this.state.payment_note} />
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
                                    <label class="container_check"> Nakit olarak ödemek istiyorum
                                        <input type="checkbox" name="payment_method" onChange={this.handleOnChange} value={this.state.payment_method} />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                {paymentFieldHtml}



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
                                                <select class="wide add_bottom_15 form-control" required name="payment_billing_country" onChange={this.handleOnChange} id="payment_billing_country" value={this.state.payment_billing_country}>
                                                    <option value="" selected="">Ülke seçiniz</option>
                                                    <option value="tr">Türkiye</option>
                                                    <option value="usa">Amerika</option>
                                                    <option value="eu">Avrupa</option>
                                                    <option value="chine">Çin</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Adres 1</label>
                                            <input type="text" id="payment_billing_address_1" name="payment_billing_address_1" class="form-control" required onChange={this.handleOnChange} value={this.state.payment_billing_address_1} />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Adres 2</label>
                                            <input type="text" id="payment_billing_address_2" name="payment_billing_address_2" class="form-control" required onChange={this.handleOnChange}  value={this.state.payment_billing_address_2}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Şehir</label>
                                            <input type="text" id="payment_billing_city" name="payment_billing_city" class="form-control" required onChange={this.handleOnChange}  value={this.state.payment_billing_city}/>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="form-group">
                                            <label>Posta Kodu</label>
                                            <input type="text" id="payment_billing_postal_code" name="payment_billing_postal_code" class="form-control" required onChange={this.handleOnChange} value={this.state.payment_billing_postal_code}/>
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

}

export default FormPayment