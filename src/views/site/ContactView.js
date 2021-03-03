import React from 'react'
import Footer from '../../components/Footer/Footer'
import FormContact from '../../components/Form/FormContact'
import MapContact from '../../components/Map/MapContact'
import ContactPageTitle from '../../components/PageTitle/ContactPageTitle'
import SectionContactInfo from '../../components/Section/SectionContactInfo'
import { getTranslatedString } from '../../controllers/controller'

const ContactView = () => {
    return (
        <>

            <main>
                <ContactPageTitle />
                <SectionContactInfo />
                <div class="bg_color_1">
                    <div class="container margin_80_55">
                        <div class="row justify-content-between">
                            <div class="col-lg-5">
                                <MapContact />
                            </div>
                            <div class="col-lg-6">
                                <h4>{getTranslatedString('form_contact_send_us_message')}</h4>
                                <p>{getTranslatedString('form_contact_send_us_message_p')}</p>
                                <div id="message-contact"></div>
                                <FormContact />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}

export default ContactView