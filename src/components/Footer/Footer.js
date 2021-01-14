import React from 'react'
import tursabLogo from '../../images/tursab-logo.png'
import logo from '../../images/hot-air-balloon.svg'

const Footer = () => {
    return (
        <footer>
            <div class="container margin_60_35">
                <div class="row">
                    <div class="col-lg-5 col-md-12 p-r-5">
                        <p><img src={logo} width="250" height="64" alt="" /></p>
                        <p>Kapadokya'nın en güvenilir, en tecrübeli seyehat partneri. Buralar daha sonra dikkatle doldurulacaktır.
                            </p>
                            <img src={tursabLogo} width="120" height="63"  />
                        <div class="follow_us">
                            <ul>
                                <li>BİZİ TAKİP EDİN</li>
                                <li><a href="#0"><i class="ti-facebook"></i></a></li>
                                <li><a href="#0"><i class="ti-pinterest"></i></a></li>
                                <li><a href="#0"><i class="ti-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 ml-lg-auto">
                        <h5>Kısayollar</h5>
                        <ul class="links">
                            <li><a href="/">Anasayfa</a></li>
                            <li><a href="/">Aktiviteler</a></li>
                            <li><a href="/">İletişim</a></li>
                            <li><a href="/">Balon Turları</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h5>Bizimle İletişime Geçin</h5>
                        <ul class="contacts">
                            <li><a href="tel://61280932400"><i class="ti-mobile"></i> + 90 (532) 695 59 68</a></li>
                            <li><a href="mailto:info@turkeyballoonscappadocia.com"><i class="ti-email"></i> info@turkeyballoonscappadocia.com</a></li>
                        </ul>
                        <div id="newsletter">
                            <h6>Kampanyalardan Haberdar Olun</h6>
                            <div id="message-newsletter"></div>
                            <form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
                                <div class="form-group">
                                    <input type="email" name="email_newsletter" id="email_newsletter" class="form-control" placeholder="E-posta adresiniz" />
                                    <input type="submit" value="Kaydol" id="submit-newsletter" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div class="row">
                    <div class="col-lg-6">
                        <ul id="footer-selector">
                            <li>
                                <div class="styled-select" id="lang-selector">
                                    <select>
                                        <option value="English" selected>English</option>
                                        <option value="French">French</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="Russian">Russian</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div class="styled-select" id="currency-selector">
                                    <select>
                                        <option value="US Dollars" selected>US Dollars</option>
                                        <option value="Euro">Euro</option>
                                    </select>
                                </div>
                            </li>
                            <li><img src="img/cards_all.svg" alt="" /></li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <ul id="additional_links">
                            <li><a href="#0">Gizlilik Sözleşmesi</a></li>
                            <li><a href="#0">K.V.K.K.</a></li>
                            <li><span>© 2021 Reliance Tour Travel</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer