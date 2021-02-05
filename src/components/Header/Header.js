import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { CommonContext } from '../../contexts/site/CommonContext'
import logo from '../../images/hot-air-balloon.svg'
import api from '../../services/api'

const Header = () => {

    const [state, setState] = useState({
        categories: [],
        is_categories_loaded: false
    })

    const commonContext = useContext(CommonContext)

    useEffect(() => {
        getCategories()
    }, [])


    const getCategories = async () => {
        const categories = await api.get('/category/list/1', { params: { category_header_visibility: '1' } })

        setState({
            ...state,
            categories: categories.data.docs,
            is_categories_loaded: true
        })
    }



    const handleSignInOnClick = (e) => {
        e.preventDefault()

        commonContext.updateState('login_modal_visibility', true, () => { })
    }

    const handleSignOutOnClick = (e) => {
        e.preventDefault()
        localStorage.removeItem('site-auth')
        localStorage.removeItem('user')
        commonContext.updateState('is_user_logged_in', false, () => {
            Swal.fire({
                title: 'Başarılı',
                text: 'Çıkış yapıldı',
                icon: 'success'
            })

            window.location.href = '/'
        })
    }



    // render user login field
    let basketIconHtml = ''
    let loginIconHtml = ''
    if (commonContext.state.is_user_logged_in === true) {
        basketIconHtml = (
            <li><a href="/sepet" className="cart-menu-btn" title="Cart"><strong>{commonContext.state.basket_items.length}</strong></a></li>
        )
        loginIconHtml = (
            <li><a href="#" onClick={handleSignOutOnClick} id="sign-in" className="login" title="Çıkış Yap">Çıkış Yap</a></li>
        )

    } else {
        loginIconHtml = (
            <li><a href="#" onClick={handleSignInOnClick} id="sign-in" className="logout" title="Sign In"><span className="fa fa-user-circle fa-2x mt-1"></span></a></li>
        )
    }


    // render categories
    let categoriesHtml = ''
    if (state.is_categories_loaded) {
        categoriesHtml = state.categories.map((item) => {
            return (
                <li><span><a href={"/seferler?category_id="+item._id+"&mature_count=1&child_count=0"}>{item.category_name}</a></span></li>
            )
        })
    }

    return (
        <header className="header menu_fixed">
            <div id="preloader"><div data-loader="circle-side"></div></div>
            <div id="logo">
                <a href="/">
                    <img src={logo} width="250" height="64" alt="" className="logo_normal" />
                    <img src={logo} width="250" height="64" alt="" className="logo_sticky" />
                </a>
            </div>
            <ul id="top_menu">
                {basketIconHtml}
                {loginIconHtml}
                <li><a href="wishlist.html" className="wishlist_bt_top" title="Your wishlist">Your wishlist</a></li>
            </ul>
            <a href="#menu" className="btn_mobile">
                <div className="hamburger hamburger--spin" id="hamburger">
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
            </a>
            <nav id="menu" className="main-menu">
                <ul>
                    <li><span><a href="/">Anasayfa</a></span></li>
                    {categoriesHtml}



                    <li><span><a href="/hakkimizda">Kurumsal</a></span>
                        <ul>
                            <li><a href="/iletisim">İletişim</a></li>
                            <li><a href="/hakkimizda">Hakkımızda</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header