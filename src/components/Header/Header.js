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
                <li><a href="#sign-in-dialog" id="sign-in" className="login" title="Sign In">Sign In</a></li>
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
                    <li><span><a href="#0">Kapadokya Balon Turları</a></span>
                        <ul>
                            <li>
                                <span><a href="#0">Tours Grid</a></span>
                                <ul>
                                    <li><a href="tours-grid-isotope.html">Tours Grid Isotope</a></li>
                                    <li><a href="tours-grid-sidebar.html">Tours Grid Sidebar</a></li>
                                    <li><a href="tours-grid-sidebar-2.html">Tours Grid Sidebar 2</a></li>
                                    <li><a href="tours-grid.html">Tours Grid Simple</a></li>
                                </ul>
                            </li>
                            <li>
                                <span><a href="#0">Tours List</a></span>
                                <ul>
                                    <li><a href="tours-list-isotope.html">Tours List Isotope</a></li>
                                    <li><a href="tours-list-sidebar.html">Tours List Sidebar</a></li>
                                    <li><a href="tours-list-sidebar-2.html">Tours List Sidebar 2</a></li>
                                    <li><a href="tours-list.html">Tours List Simple</a></li>
                                </ul>
                            </li>
                            <li><a href="tours-half-screen-map.html">Tours Half Screen Map</a></li>
                            <li><a href="tour-detail.html">Tour Detail</a></li>
                            <li><a href="detail-working-contact-form.html">Detail Contact Form <strong>New!</strong></a></li>
                            <li>
                                <span><a href="#0">Open Street Map</a></span>
                                <ul>
                                    <li><a href="tours-half-screen-map-leaflet.html">Tours Half Screen Map</a></li>
                                    <li><a href="tours-list-isotope-leaflet.html">Tours Grid Isotope</a></li>
                                    <li><a href="tours-list-sidebar-leaflet.html">Tours Grid Sidebar</a></li>
                                    <li><a href="tours-list-sidebar-2-leaflet.html">Tours Grid Sidebar 2</a></li>
                                    <li><a href="tours-list-leaflet.html">Tours Grid Simple</a></li>
                                    <li><a href="tours-list-isotope-leaflet.html">Tours List Isotope</a></li>
                                    <li><a href="tours-list-sidebar-leaflet.html">Tours List Sidebar</a></li>
                                    <li><a href="tours-list-sidebar-2-leaflet.html">Tours List Sidebar 2</a></li>
                                    <li><a href="tours-list-leaflet.html">Tours List Simple</a></li>
                                    <li><a href="tour-detail-leaflet.html">Tour Detail</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><span><a href="#0">Kapadokya Turlarımız</a></span>
                        <ul>
                            <li>
                                <span><a href="#0">Hotel Grid</a></span>
                                <ul>
                                    <li><a href="hotels-grid-isotope.html">Hotel Grid Isotope</a></li>
                                    <li><a href="hotels-grid-sidebar.html">Hotel Grid Sidebar</a></li>
                                    <li><a href="hotels-grid-sidebar-2.html">Hotel Grid Sidebar 2</a></li>
                                    <li><a href="hotels-grid.html">Hotel Grid Simple</a></li>
                                </ul>
                            </li>
                            <li>
                                <span><a href="#0">Hotel List</a></span>
                                <ul>
                                    <li><a href="hotels-list-isotope.html">Hotel List Isotope</a></li>
                                    <li><a href="hotels-list-sidebar.html">Hotel List Sidebar</a></li>
                                    <li><a href="hotels-list-sidebar-2.html">Hotel List Sidebar 2</a></li>
                                    <li><a href="hotels-list.html">Hotel List Simple</a></li>
                                </ul>
                            </li>
                            <li><a href="hotels-half-screen-map.html">Hotel Half Screen Map</a></li>
                            <li><a href="hotel-detail.html">Hotel Detail</a></li>
                        </ul>
                    </li>
                    <li><span><a href="#0">Kapadokya Aktivite Turları </a></span>
                        <ul>
                            <li>
                                <span><a href="#0">Restaurant Grid</a></span>
                                <ul>
                                    <li><a href="restaurants-grid-isotope.html">Restaurant Grid Isotope</a></li>
                                    <li><a href="restaurants-grid-sidebar.html">Restaurant Grid Sidebar</a></li>
                                    <li><a href="restaurants-grid-sidebar-2.html">Restaurant Grid Sidebar 2</a></li>
                                    <li><a href="restaurants-grid.html">Restaurant Grid simple</a></li>
                                </ul>
                            </li>
                            <li>
                                <span><a href="#0">Restaurant List</a></span>
                                <ul>
                                    <li><a href="restaurants-list-isotope.html">Restaurant List Isotope</a></li>
                                    <li><a href="restaurants-list-sidebar.html">Restaurant List Sidebar</a></li>
                                    <li><a href="restaurants-list-sidebar-2.html">Restaurant List Sidebar 2</a></li>
                                    <li><a href="restaurants-list.html">Restaurant List Simple</a></li>
                                </ul>
                            </li>
                            <li><a href="restaurants-half-screen-map.html">Half Screen Map</a></li>
                            <li><a href="restaurant-detail.html">Restaurant Detail</a></li>
                        </ul>
                    </li>
                    <li><span><a href="#0">Klasik Araç Turları</a></span>
                        <ul>
                            <li><a href="about.html">About</a></li>
                            <li><a href="media-gallery.html">Media gallery</a></li>
                            <li><a href="help.html">Help Section</a></li>
                            <li><a href="faq.html">Faq Section</a></li>
                            <li><a href="wishlist.html">Wishlist page</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="bootstrap-modal.html">Bootstrap Modal <strong>New!</strong></a></li>
                            <li><a href="modal-version-2.html">Another Modal <strong>New!</strong></a></li>
                            <li><a href="pricing-tables-2.html">Pricing Tables 1 <strong>New!</strong></a></li>
                            <li><a href="pricing-tables-3.html">Pricing Tables 2 <strong>New!</strong></a></li>
                        </ul>
                    </li>
                    <li><span><a href="#0">Kurumsal</a></span>
                        <ul>
                            <li><a href="menu-options.html">Menu Position Options</a></li>
                            <li><a href="tour-detail-singlemonth-datepicker.html">Single month Datepicker</a></li>
                            <li><a href="404.html">404 Error page</a></li>
                            <li><a href="cart-1.html">Cart page 1</a></li>
                            <li><a href="cart-2.html">Cart page 2</a></li>
                            <li><a href="cart-3.html">Cart page 3</a></li>
                            <li><a href="pricing-tables.html">Responsive pricing tables</a></li>
                            <li><a href="coming_soon/index.html">Coming soon</a></li>
                            <li><a href="invoice.html">Invoice</a></li>
                            <li><a href="icon-pack-1.html">Icon pack 1</a></li>
                            <li><a href="icon-pack-2.html">Icon pack 2</a></li>
                            <li><a href="icon-pack-3.html">Icon pack 3</a></li>
                            <li><a href="icon-pack-4.html">Icon pack 4</a></li>
                            <li><a href="hamburgers.html">Animated Hamburgers</a></li>
                        </ul>
                    </li>
                    <li><span><a href="#0">İletişim</a></span></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header