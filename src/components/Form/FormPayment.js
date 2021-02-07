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
            payment_method: 'online',
            payment_cart_name: '',
            payment_cart_number: '',
            payment_cart_expiration_month: '',
            payment_cart_expiration_year: '',
            payment_cart_ccv: ''
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    componentDidMount() {

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


    async handleOnSubmit(e) {
        e.preventDefault()

        const data = {
            reservation: this.context.preReservation,
            payment_method: this.state.payment_method,
            payment_cart_name: this.state.payment_cart_name,
            payment_cart_number: this.state.payment_cart_number,
            payment_cart_expiration_month: this.state.payment_cart_expiration_month,
            payment_cart_expiration_year: this.state.payment_cart_expiration_year,
            payment_cart_ccv: this.state.payment_cart_ccv
        }

        const submitResponse = await api.post('/reservation/new', data, { headers: { 'site-token': localStorage.getItem('site-auth') } })

        if (submitResponse.data.response) {
            window.location.href = '/odeme/basarili/'+submitResponse.data.conversationId+''
        } else {
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
                                <h3><strong>1</strong>Ödeme Bilgileri</h3>
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