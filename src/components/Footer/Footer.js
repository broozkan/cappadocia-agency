import React from 'react'
import tursabLogo from '../../images/tursab-logo.png'
import logo from '../../images/hot-air-balloon.svg'
import { getTranslatedString } from '../../controllers/controller'
import logoBand from '../../images/logo-band.png'
import phoneIcon from '../../assets/png/smartphone.png'
import emailIcon from '../../assets/png/email.png'
import facebookLogo from '../../assets/png/facebook.png'
import instagramLogo from '../../assets/png/instagram.png'
import tripadvisorLogo from '../../assets/png/tripadvisor.png'

const Footer = () => {
    return (
        <footer>
            <div class="container margin_60_35">
                <div class="row">
                    <div class="col-lg-5 col-md-12 p-r-5">
                        <p><img src={logo} width="250" height="64" alt="" /></p>
                        <p>{getTranslatedString('footer_p')}</p>
                        <img src={tursabLogo} width="120" height="63" />
                        <div class="follow_us">
                            <ul>
                                <li>{getTranslatedString('footer_follow_us')}</li>
                                <li><a href="https://facebook.com/turkeyballoonstour" target="_blank"><img className="img-fluid" width="25" src={facebookLogo} /></a></li>
                                <li><a href="https://instagram.com/turkeyballoonscappadocia?igshid=nfo0hsgnutdh" target="_blank"><img className="img-fluid" width="25" src={instagramLogo} /></a></li>
                                <li><a href="https://www.tripadvisor.com.tr/Attraction_Review-g297983-d17310136-Reviews-Reliance_Tour_Travel_Agency-Goreme_Cappadocia.html" target="_blank"><img className="img-fluid" width="25" src={tripadvisorLogo} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 ml-lg-auto">
                        <h5>{getTranslatedString('footer_shorcuts_h5')}</h5>
                        <ul class="links">
                            <li><a href="/">{getTranslatedString('header_home')}</a></li>
                            <li><a href="/">{getTranslatedString('header_commercial')}</a></li>
                            <li><a href="/">{getTranslatedString('contact')}</a></li>
                            <li><a href="/gizlilik-sozlesmesi">{getTranslatedString('footer_privacy_policy')}</a></li>
                            <li><a href="/mesafeli-satis-sozlesmesi">{getTranslatedString('footer_ecommerce_policy')}</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h5>{getTranslatedString('footer_contact_us')}</h5>
                        <ul class="contacts">
                            <li><a href="tel://61280932400"><img src={phoneIcon} className="img-fluid" width="20" /> + 90 (532) 695 59 68</a></li>
                            <li><a href="mailto:info@turkeyballoonscappadocia.com"><img src={emailIcon} className="img-fluid" width="20" /> info@turkeyballoonscappadocia.com</a></li>
                        </ul>
                        <div id="newsletter">
                            <h6>{getTranslatedString('footer_subscribe')}</h6>
                            <div id="message-newsletter"></div>
                            <form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
                                <div class="form-group">
                                    <input type="email" name="email_newsletter" id="email_newsletter" class="form-control" placeholder={getTranslatedString('footer_subscribe_input')} />
                                    <input type="submit" value={getTranslatedString('footer_subscribe_input_value')} id="submit-newsletter" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div class="row">
                    <div class="col-lg-4">
                        <ul id="footer-selector">

                            <li><img src={logoBand} className="img-fluid" alt="" /></li>
                        </ul>
                    </div>
                    <div class="col-lg-8">
                        <ul id="additional_links">
                            <li><a href="/gizlilik-sozlesmesi">{getTranslatedString('footer_privacy_policy')}</a></li>
                            <li><a href="/mesafeli-satis-sozlesmesi">{getTranslatedString('footer_ecommerce_policy')}</a></li>
                            <li><a href="/mesafeli-satis-sozlesmesi">K.V.K.K.</a></li>
                            <li><span>© 2021 Reliance Tour Travel</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer