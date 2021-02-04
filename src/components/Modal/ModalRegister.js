import React, { Component, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { CommonContext } from '../../contexts/site/CommonContext'
import FormRegister from '../Form/FormRegister'


class ModalRegister extends Component {

    static contextType = CommonContext

    constructor(){
        super()

        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }


    handleClose = () => {
        this.context.updateState('register_modal_visibility', false, ()=>{})
    }

    
    handleShow = () => {
        this.context.updateState('register_modal_visibility', true, ()=>{})
    }

    render(){
        return (
            <>
                <Modal show={this.context.state.register_modal_visibility} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Kayıt Olun</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div id="sign-in-dialog" class="zoom-anim-dialog">
                    <FormRegister />
    
                    </div>
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

export default ModalRegister