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
    if (localStorage.getItem('language') == "en") {
        languageImageSrc = unitedKingdomPng
    }

    return (
        <li>
            <span>
                <a href="#0"><img src={languageImageSrc} width="25" className="img-fluid d-xs-none" /><span className="language-text">TR <span className="fa fa-chevron-down"></span></span></a>
            </span>
            <ul id="language">
                <li onClick={handleOnClick} data-language="en"><a href="#"><img src={unitedKingdomPng} width="25" className="img-fluid" /> <span className="language-text">EN</span></a></li>
                <li onClick={handleOnClick} data-language="tr"><a href="#"><img src={turkeyPng} width="25" className="img-fluid" /> <span className="language-text">TR</span></a></li>
            </ul>
        </li>
    )
}

export default ListLanguage