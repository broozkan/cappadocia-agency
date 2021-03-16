import React from 'react'
import whatsappLogo from '../../images/whatsapp.png'

const LinkWhatsapp = () => {

    return (
        <a href="https://api.whatsapp.com/send?phone=+905362127078" className="whatsapp-icon" target="_blank">
            <img className="img-fluid " src={whatsappLogo} />
        </a>
    )
}

export default LinkWhatsapp