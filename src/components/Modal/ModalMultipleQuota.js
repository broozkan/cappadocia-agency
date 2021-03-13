import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { AdminContext } from '../../contexts/site/AdminContext'
import FormForgetPassword from '../Form/FormForgetPassword'
import { handleOnClickAddMoreQuota } from '../Form/FormActivity'

class ModalMultipleQuota extends Component {

    static contextType = AdminContext

    constructor() {
        super()
        this.state = {
            show: true,
            multiple_quota_beginning_date: '',
            multiple_quota_beginning_hour: '',
            multiple_quota_ending_hour: '',
            multiple_quota_quota_count: '',
            multiple_quota_iteration_count: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }


    handleClose = () => this.setState({
        show: false
    })
    handleShow = () => this.setState({
        show: true
    })

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleOnSubmit = async (e) => {
        e.preventDefault()

        await this.context.setMultipleQuotaInformations(this.state)
        console.log(this.props);

        this.props.handleOnSubmit()

    }

    render() {

        return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Çoklu Kontenjan Ekle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleOnSubmit}>
                            <div class="form-group">
                                <label>Başlangıç Tarihi </label>
                                <input type="date" onChange={this.handleOnChange} name="multiple_quota_beginning_date" value={this.state.multiple_quota_beginning_date} class="form-control" />
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="multiple_quota_beginning_hour" onChange={this.handleOnChange} value={this.multiple_quota_beginning_hour}>
                                    <option value="" disabled selected>Başlangıç Saati</option>
                                    <option value="05:00">05:00</option>
                                    <option value="06:00">06:00</option>
                                    <option value="07:00">07:00</option>
                                    <option value="08:00">08:00</option>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                    <option value="20:00">20:00</option>
                                    <option value="21:00">21:00</option>
                                    <option value="22:00">22:00</option>
                                    <option value="23:00">23:00</option>
                                    <option value="00:00">00:00</option>
                                    <option value="01:00">01:00</option>
                                    <option value="02:00">02:00</option>
                                    <option value="03:00">03:00</option>
                                    <option value="04:00">04:00</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="multiple_quota_ending_hour" onChange={this.handleOnChange} value={this.multiple_quota_ending_hour}>
                                    <option value="" disabled selected>Bitiş Saati</option>
                                    <option value="05:00">05:00</option>
                                    <option value="06:00">06:00</option>
                                    <option value="07:00">07:00</option>
                                    <option value="08:00">08:00</option>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                    <option value="20:00">20:00</option>
                                    <option value="21:00">21:00</option>
                                    <option value="22:00">22:00</option>
                                    <option value="23:00">23:00</option>
                                    <option value="00:00">00:00</option>
                                    <option value="01:00">01:00</option>
                                    <option value="02:00">02:00</option>
                                    <option value="03:00">03:00</option>
                                    <option value="04:00">04:00</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Kontenjan </label>
                                <input type="number" name="multiple_quota_quota_count" onChange={this.handleOnChange} value={this.state.multiple_quota_quota_count} class="form-control" />
                            </div>
                            <div class="form-group">
                                <label>Gün Sayısı </label>
                                <input type="number" name="multiple_quota_iteration_count" onChange={this.handleOnChange} value={this.state.multiple_quota_iteration_count} class="form-control" />
                            </div>
                            <div class="form-group">
                                <input type="submit" className="btn_1 medium" value="Kaydet" />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Kapat
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}

export default ModalMultipleQuota