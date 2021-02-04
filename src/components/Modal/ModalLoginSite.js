import React, { Component, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { CommonContext } from '../../contexts/site/CommonContext'
import FormLoginSite from '../Form/FormLoginSite'


class ModalLoginSite extends Component {

    static contextType = CommonContext

    constructor(){
        super()

        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }


    handleClose = () => {
        this.context.updateState('login_modal_visibility', false, ()=>{})
    }

    
    handleShow = () => {
        this.context.updateState('login_modal_visibility', true, ()=>{})
    }

    render(){
        return (
            <>
                <Modal show={this.context.state.login_modal_visibility} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Oturum Açın</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div id="sign-in-dialog" class="zoom-anim-dialog">
                    <FormLoginSite />
    
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

export default ModalLoginSite