import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import FormForgetPassword from '../Form/FormForgetPassword'


const ModalForgetPassword = () => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Parola Sıfırlama Bağlantısı Alın</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="sign-in-dialog" class="zoom-anim-dialog">

                        <FormForgetPassword />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Kapat
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalForgetPassword