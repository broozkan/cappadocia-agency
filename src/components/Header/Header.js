import React from 'react'
import logo from '../../images/hot-air-balloon.svg'

const Header = () => {

    return (
        <header className="header menu_fixed">
            <div id="preloader"><div data-loader="circle-side"></div></div>
            <div id="logo">
                <a href="index.html">
                    <img src={logo} width="250" height="64" alt="" className="logo_normal" />
                    <img src={logo} width="250" height="64" alt="" className="logo_sticky" />
                </a>
            </div>
            <ul id="top_menu">
                <li><a href="cart-1.html" className="cart-menu-btn" title="Cart"><strong>4</strong></a></li>
                <li><a href="#sign-in-dialog" id="sign-in" className="login" title="Sign In">Giriş Yap</a></li>
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
                    <li><span><a href="/aktivite/detay/1">Kapadokya Balon Turları</a></span></li>
                    <li><span><a href="/aktivite/detay/1">Kapadokya Turlarımız</a></span></li>
                    <li><span><a href="/aktivite/detay/1">Kapadokya Aktivite Turları</a></span></li>
                    <li><span><a href="/aktivite/detay/1">Klasik Araç Turları</a></span></li>
                    
                    
                    
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