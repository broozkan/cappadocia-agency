import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { CommonContext } from '../../contexts/site/CommonContext'
import { getTranslatedString } from '../../controllers/controller'
import api from '../../services/api'
import AsideTotalPayment from '../Aside/AsideTotalPayment'
import ElementScore from '../Element/ElementScore'
import MessageExistingCustomer from '../Message/MessageExistingCustomer'
import payWithIyzico from '../../images/iyzico_ile_ode.png'
import InnerHTML from 'dangerously-set-html-content'


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
            payment_cart_ccv: '',
            payment_form_html: '',
            is_payment_form_loaded: false,
            conversation_id: ''
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    async componentDidMount() {
        const parsedPreReservation = JSON.parse(localStorage.getItem('pre_reservation_data'))

        const reservation = {
            reservation_price: parsedPreReservation.pre_reservation_total,
            reservation_passengers: parsedPreReservation.pre_reservation_passenger,
            reservation_activity_currency: parsedPreReservation.pre_reservation_activity.activity_currency,
            reservation_activity_name: parsedPreReservation.pre_reservation_activity.activity_name,
            reservation_activity_id: parsedPreReservation.pre_reservation_activity.activity_id
        }

        const response = await api.get('/reservation/initialize', { params: reservation })

        this.setState({
            payment_form_html: response.data.checkoutFormContent,
            is_payment_form_loaded: true,
            conversation_id: response.data.conversationId
        })
    }

    handleOnChange(e) {

        if (e.target.type === "checkbox") {
            if (e.target.value == "cash") {
                window.location.reload()
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
            reservation_payment_method: this.state.payment_method,
            payment_cart_name: this.state.payment_cart_name,
            payment_cart_number: this.state.payment_cart_number,
            payment_cart_expiration_month: this.state.payment_cart_expiration_month,
            payment_cart_expiration_year: this.state.payment_cart_expiration_year,
            payment_cart_ccv: this.state.payment_cart_ccv
        }

        const submitResponse = await api.post('/reservation/new', data)

        if (submitResponse.data.response) {
            window.location.href = '/odeme/basarili/cash'
        } else {
            Swal.fire({
                title: 'Hata',
                text: submitResponse.data.responseData,
                icon: 'error'
            })
        }

    }

    render() {

        let paymentFormJsx = ''
        let asideJsx = ''
        // render card form html according to payment method
        if (this.state.payment_method == "cash") {
            asideJsx = (
                <AsideTotalPayment />
            )
            paymentFormJsx = (
                <div className="form-group">
                    <h5> <span className="fa fa-warning"></span> {getTranslatedString('form_payment_cash_description')}</h5>

                </div>
            )
        } else {

            if (this.state.is_payment_form_loaded) {
                paymentFormJsx = (
                    <>
                        <div id="iyzipay-checkout-form" class="responsive"></div>

                        <InnerHTML html={this.state.payment_form_html} />
                    </>
                )
            } else {
                paymentFormJsx = <span className="fa fa-3x fa-spinner fa-spin"> </span>
            }
        }


        return (
            <form method="POST" onSubmit={this.handleOnSubmit} >
                <div class="row" style={{ transform: 'none' }}>


                    <div class="col-lg-8">
                        <div class="box_cart">

                            <div class="form_title">
                                <h3><strong>1</strong>{getTranslatedString('payment')} {getTranslatedString('informations')}</h3>
                                <p>{getTranslatedString('form_payment_p_1')}</p>
                            </div>

                            <div class="step">
                                <div class="form-group">
                                    <label class="container_check"> {getTranslatedString('form_payment_pay_with_cash')}
                                        <input type="checkbox" name="payment_method" onChange={this.handleOnChange} value={this.state.payment_method} />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                {paymentFormJsx}
                            </div>


                            <hr></hr>

                        </div>
                    </div>

                    {asideJsx}
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <img src={payWithIyzico} className="img-fluid" />

                    </div>
                </div>
            </form>
        )
    }

}

export default FormPayment