import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { CommonContext } from '../../contexts/site/CommonContext'
import logo from '../../images/logo.png'
import api from '../../services/api'
import translationPng from '../../images/translation.png'
import phoneIcon from '../../assets/png/smartphone.png'

import { getTranslatedString } from '../../controllers/controller'
import emailIcon from '../../assets/png/email.png'
import ListLanguage from '../List/ListLanguage'

const Header = () => {

    const [mobileMenuState, setMobileMenuState] = useState(false)
    const [state, setState] = useState({
        categories: [],
        is_categories_loaded: false,
        activities: [],
        is_activities_loaded: false
    })

    const commonContext = useContext(CommonContext)

    useEffect(() => {
        getCategories()
    }, [])

    const handleToggleMobileMenu = () => {
        setMobileMenuState(!mobileMenuState)
    }



    const getCategories = async () => {
        const categories = await api.get('/category/list/1',
            { params: { category_header_visibility: '1', category_language: localStorage.getItem('language') } }
        )

        const activities = await api.get('/activity/list/1',
            { params: { activity_language: localStorage.getItem('language') } }
        )

        setState({
            ...state,
            categories: categories.data.docs,
            is_categories_loaded: true,
            activities: activities.data.docs,
            is_activities_loaded: true
        })
    }










    // render categories
    let categoriesHtml = ''
    if (state.is_categories_loaded) {
        categoriesHtml = state.categories.map((item) => {

            let activitiesDropdownJsx = state.activities.map((activityItem) => {
                if (item._id == activityItem.activity_category[0]._id) {
                    return (
                        <li><a href={`/aktivite/detay/?activity=${activityItem._id}`}>{activityItem.activity_name}</a></li>
                    )
                }
            })
            return (
                <li>
                    <span>
                        <a href={"/seferler?category_id=" + item._id + "&adult_count=1&child_count=0"}>{item.category_name}
                            <span className="fa d-lg-none fa-chevron-right"></span>
                        </a>
                    </span>
                    <ul>
                        {activitiesDropdownJsx}
                    </ul>
                </li>
            )
        })
    }

    // render mobile menu
    let mobileMenuClass = 'closed'
    if (mobileMenuState) {
        mobileMenuClass = 'opened'
    }



    return (
        <header className="header menu_fixed">
            <div className="row">
                <div className="col-lg-12 text-right">
                    <nav className="main-menu header-top-bar">
                        <ul>
                            <li className="d-xs-none">
                                <a href="tel:+905362127078" className="text-white"><span><img src={phoneIcon} width="25" />  +90 (536) 212 70 78</span></a>
                            </li>
                            <li className="d-xs-none">
                                <a href="mailto:info@turkeyballoonscappadocia.com" className="text-white"><span><img src={emailIcon} width="25" />  info@turkeyballoonscappadocia.com</span></a>
                            </li>
                            <ListLanguage />
                        </ul>

                    </nav>


                </div>
            </div>
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
                        </div>
                    </div>
                </div>

                <ul>
                    <li><span><a href="/"> {getTranslatedString('header_home')} <span className="fa d-lg-none fa-home"></span></a></span></li>
                    {categoriesHtml}



                    <li>
                        <span><a href="/hakkimizda">{getTranslatedString('header_commercial')} <span className="fa d-lg-none fa-chevron-down"></span></a></span>
                        <ul>
                            <li><a href="/iletisim">{getTranslatedString('contact')} <span className="fa d-lg-none fa-phone"></span></a></li>
                            <li><a href="/hakkimizda">{getTranslatedString('header_about')} <span className="fa d-lg-none fa-chevron-right"></span></a></li>
                        </ul>
                    </li>


                </ul>
            </nav>
        </header>
    )
}

export default Header