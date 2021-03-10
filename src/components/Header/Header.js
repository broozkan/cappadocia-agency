import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { CommonContext } from '../../contexts/site/CommonContext'
import logo from '../../images/logo.png'
import api from '../../services/api'
import translationPng from '../../images/translation.png'
import unitedKingdomPng from '../../images/united-kingdom.png'
import turkeyPng from '../../images/turkey.png'
import { getTranslatedString } from '../../controllers/controller'

const Header = () => {

    const [mobileMenuState, setMobileMenuState] = useState(false)
    const [state, setState] = useState({
        categories: [],
        is_categories_loaded: false
    })

    const commonContext = useContext(CommonContext)

    useEffect(() => {
        getCategories()
    }, [])

    const handleToggleMobileMenu = () => {
        setMobileMenuState(!mobileMenuState)
    }

    const handleOnClick = (e) => {
        localStorage.setItem('language', e.currentTarget.dataset.language)
        window.location.reload()
    }

    const getCategories = async () => {
        const categories = await api.get('/category/list/1',
            { params: { category_header_visibility: '1', category_language: localStorage.getItem('language') } }
        )

        setState({
            ...state,
            categories: categories.data.docs,
            is_categories_loaded: true
        })
    }









    // render categories
    let categoriesHtml = ''
    if (state.is_categories_loaded) {
        categoriesHtml = state.categories.map((item) => {
            return (
                <li><span><a href={"/seferler?category_id=" + item._id + "&mature_count=1&child_count=0"}>{item.category_name} <span className="fa fa-chevron-right"></span></a></span></li>
            )
        })
    }

    // render mobile menu
    let mobileMenuClass = 'closed'
    if (mobileMenuState) {
        mobileMenuClass = 'opened'
    }

    // render current language image
    let languageImageSrc = turkeyPng
    if (localStorage.getItem('language') == "en") {
        languageImageSrc = unitedKingdomPng
    }

    return (
        <header className="header menu_fixed">
            <div id="preloader"><div data-loader="circle-side"></div></div>
            <div id="logo">
                <a href="/">
                    <img src={logo} height="150" alt="" className="logo_normal" />
                    <img src={logo} height="150" alt="" className="logo_sticky" />
                </a>
            </div>
            <ul id="top_menu">
                <li>
                    <a href="#" className="" title="Your wishlist"></a>
                </li>
            </ul>
            <a href="#menu" className="btn_mobile float-right" onClick={handleToggleMobileMenu}>
                <div className="hamburger hamburger--spin" id="hamburger">
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
            </a>
            <nav id="menu" className={"main-menu active " + mobileMenuClass}>
                <div className="row">
                    <div className="col-4">
                        <img src={logo} className="d-lg-none img-fluid float-left" width="100" />
                    </div>
                    <div className="col-8">
                        <div className="mobile-menu-header d-none">
                            <h5>MENU </h5>
                        </div>
                    </div>
                </div>

                <ul>
                    <li><span><a href="/"> {getTranslatedString('header_home')} <span className="fa fa-home"></span></a></span></li>
                    {categoriesHtml}



                    <li><span><a href="/hakkimizda">{getTranslatedString('header_commercial')} <span className="fa fa-chevron-down"></span></a></span>
                        <ul>
                            <li><a href="/iletisim">{getTranslatedString('contact')} <span className="fa fa-phone"></span></a></li>
                            <li><a href="/hakkimizda">{getTranslatedString('header_about')} <span className="fa fa-chevron-right"></span></a></li>
                            <li><a href="/mesafeli-satis-sozlesmesi">{getTranslatedString('footer_ecommerce_policy')} <span className="fa fa-chevron-right"></span></a></li>
                            <li><a href="/gizlilik-sozlesmesi">{getTranslatedString('footer_privacy_policy')} <span className="fa fa-chevron-right"></span></a></li>
                        </ul>
                    </li>
                    <li>
                        <span>
                            <a href="#0"><img src={languageImageSrc} width="30" className="img-fluid d-xs-none" /></a>
                        </span>
                        <ul id="language">
                            <li onClick={handleOnClick} data-language="en"><a href="#"><img src={unitedKingdomPng} width="25" className="img-fluid" /></a></li>
                            <li onClick={handleOnClick} data-language="tr"><a href="#"><img src={turkeyPng} width="25" className="img-fluid" /></a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header