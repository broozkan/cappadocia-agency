import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavbarUserProfile from '../../components/Navbar/NavbarUserProfile'
import UserProfilePageTitle from '../../components/PageTitle/UserProfilePageTitle'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation

} from 'react-router-dom'
import FormPersonalInformation from '../../components/Form/FormPersonalInformation'
import TablePreviousPurchases from '../../components/Table/TablePreviousPurchases'
import FormResetPassword from '../../components/Form/FormResetPassword'
import AboutUsPageTitle from '../../components/PageTitle/AboutUsPageTitle'
import CardAboutUs from '../../components/Card/CardAboutUs'

const AboutUsView = () => {
    return (
        <>

            <main>
                <AboutUsPageTitle />
                <div class="bg_color_1">
                    <div class="container margin_80_55">
                        <div class="main_title_2">
                            <span><em></em></span>
                            <h2>Hakkımızda</h2>
                            <p>Bizi daha yakından tanıyın</p>
                        </div>
                        <div class="row justify-content-between">
                            <div class="col-lg-6 wow animated" data-wow-offset="150">
                                <figure class="block-reveal">
                                    <div class="block-horizzontal"></div>
                                    <img src="img/about_1.jpg" class="img-fluid" alt="" />
                                </figure>
                            </div>
                            <div class="col-lg-5">
                                <h5>Turkey Balloons Cappadocia (turkeyballoonscappadocia.com)</h5>
                                <p>
                                    Reliance Tour Travel (Türsab #11645) online Kapadokya’da balon turları, aktivite turları, bölge turları üzerine hizmet veren rezervasyon sitesidir.
                                </p>
                                <p>
                                    Kapadokya’nın eşsiz güzelliklerini sizelere en doğru biçimde, güvenli ve tecrübeli ekibi ile siz kıymetli misafirlerimize hayatı boyunca unutamayacakları bir Kapadokya serüveni sunmaktır.

                                </p>
                                <p>
                                    Kapadokya’nın büyülü dünyasına birbirinden değerli ve tecrübeli partnerlerimiz ile bizimle  turlarını gerçekleştiren 3000 üzerinde yerli ve yabancı misafirimizin bizi tercih etmesinden dolayı sizlere en güvenilir ve hesaplı hizmeti sunuyoruz.
                                    Eşsiz güzellikleri ile rüya gibi bir Kapadokya turlarınızı bizimle gerçekleştirin...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg_color_1" style={{ transform: 'none' }}>
                    <div class="container margin_60_35" style={{ transform: 'none' }}>
                        <div class="main_title_2">
                            <span><em></em></span>
                            <h2>Neden Biz?</h2>
                            <p>İşte size bizi seçmeniz için sebepler</p>
                        </div>

                        <div className="row">
                            <div class="col-lg-4 col-md-6">
                                <a class="box_feat" href="#0">
                                    <i class="pe-7s-medal"></i>
                                    <h3>Mutlu Misafirler</h3>
                                    <p>Keyifli tatiller.</p>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <a class="box_feat" href="#0">
                                    <i class="pe-7s-medal"></i>
                                    <h3>Profesyonel Ekip</h3>
                                    <p>Güvenli tatiller.</p>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <a class="box_feat" href="#0">
                                    <i class="pe-7s-medal"></i>
                                    <h3>Kaliteli Hizmet</h3>
                                    <p>Eğlenceli tatiller.</p>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}

export default AboutUsView