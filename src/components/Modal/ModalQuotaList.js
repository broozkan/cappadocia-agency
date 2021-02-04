import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import FormForgetPassword from '../Form/FormForgetPassword'


class ModalQuotaList extends Component {

    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    handleClose = () => this.setState({
        show: false
    })
    handleShow = () => this.setState({
        show: true
    })

    render() {
        return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Kontenjanlar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        kontenjan listesi
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

export default ModalQuotaList