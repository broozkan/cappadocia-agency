import React, { useContext, useEffect } from 'react'
import bg from '../../images/slide01.jpg'
import FormResearchBooking from '../Form/FormResearchBooking'
import { CommonContext } from '../../contexts/site/CommonContext'
import {getTranslatedString} from '../../controllers/controller'


const Slider = () => {


  const commonContext = useContext(CommonContext)

    return (
        <section className="hero_single version_2">
        <div className="wrapper">
          <div className="container">
            <h3>{getTranslatedString('slider_h3')}</h3>
            <p>{getTranslatedString('slider_p')}</p>
            <FormResearchBooking />
          </div>
        </div>
      </section>
    )
}

export default Slider