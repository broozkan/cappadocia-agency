import React from 'react'
import unitedKingdomPng from '../../images/united-kingdom.png'
import turkeyPng from '../../images/turkey.png'



const ListLanguage = () => {


    const handleOnClick = (e) => {
        localStorage.setItem('language', e.currentTarget.dataset.language)
        window.location.reload()
    }

    // render current language image
    let languageImageSrc = turkeyPng
    let languageText = 'TR'
    if (localStorage.getItem('language') == "en") {
        languageImageSrc = unitedKingdomPng
        languageText = 'EN'
    }

    return (
        <li>
            <span className="d-xs-none">
                <a href="#0"><img src={languageImageSrc} width="25" className="img-fluid d-xs-none" /><span className="language-text">{languageText} <span className="fa fa-chevron-down"></span></span></a>
            </span>
            <ul id="language">
                <li onClick={handleOnClick} data-language="en"><a href="#"><img src={unitedKingdomPng} width="25" className="img-fluid" /> <span className="language-text d-xs-none">EN</span></a></li>
                <li onClick={handleOnClick} data-language="tr"><a href="#"><img src={turkeyPng} width="25" className="img-fluid" /> <span className="language-text d-xs-none">TR</span></a></li>
            </ul>
        </li>
    )
}

export default ListLanguage