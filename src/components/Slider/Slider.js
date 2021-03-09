import React, { useContext, useEffect, useState } from 'react'
import bg from '../../images/slide01.jpg'
import FormResearchBooking from '../Form/FormResearchBooking'
import { CommonContext } from '../../contexts/site/CommonContext'
import { getTranslatedString } from '../../controllers/controller'


const Slider = () => {

  const [isFormVisible, setIsFormVisible] = useState(false)


  const handleOnClick = () => {
    setIsFormVisible(true)
  }

  const commonContext = useContext(CommonContext)

  // render form visibility
  let formCollapseButtonHtml = (
    <button className="btn_1 rounded w-100 d-lg-none mt-4" onClick={handleOnClick} style={{background: "#0054a6"}}>{getTranslatedString('search_quickly')} <span className="fa fa-chevron-down"></span></button>
  )

  let formRowClassHtml = 'mobile-visibility-visible'
  if (isFormVisible) {
    formCollapseButtonHtml = ''
  } else {
    formRowClassHtml = 'mobile-visibility-hidden'
  }

  return (
    <section className="hero_single version_2">
      <div className="wrapper">
        <div className="container">
          <h3>{getTranslatedString('slider_h3')}</h3>
          <p>{getTranslatedString('slider_p')}</p>
          <div className="row">
            <div className="col-lg-12">
              {formCollapseButtonHtml}

            </div>
            <div className={`col-lg-12 ${formRowClassHtml}`}>
              <FormResearchBooking />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider