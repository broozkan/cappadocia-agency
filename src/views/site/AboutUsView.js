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
import { getTranslatedString } from '../../controllers/controller'

const AboutUsView = () => {
    return (
        <>

            <main>
                <AboutUsPageTitle />
                <div class="bg_color_1">
                    <div class="container margin_80_55">
                        <div class="main_title_2">
                            <span><em></em></span>
                            <h2>{getTranslatedString('header_about')}</h2>
                            <p>{getTranslatedString('about_us_p')}</p>
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
                                    {getTranslatedString('about_us_first_paragraph')}.
                                </p>
                                <p>
                                    {getTranslatedString('about_us_second_paragraph')}.

                                </p>
                                <p>
                                    {getTranslatedString('about_us_third_paragraph')}.

                                    </p>
                                <p>
                                    {getTranslatedString('about_us_fourth_paragraph')}...

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg_color_1" style={{ transform: 'none' }}>
                    <div class="container margin_60_35" style={{ transform: 'none' }}>
                        <div class="main_title_2">
                            <span><em></em></span>
                            <h2>{getTranslatedString('about_us_why_choose_us')}?</h2>
                            <p>{getTranslatedString('about_us_why_choose_us_p')}</p>
                        </div>

                        <div className="row">
                            <div class="col-lg-4 col-md-6">
                                <a class="box_feat" href="#0">
                                    <i class="pe-7s-medal"></i>
                                    <h3>{getTranslatedString('happy_guests')}</h3>
                                    <p>{getTranslatedString('enjoyable_vacations')}.</p>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <a class="box_feat" href="#0">
                                    <i class="pe-7s-medal"></i>
                                    <h3>{getTranslatedString('professional_crew')}</h3>
                                    <p>{getTranslatedString('secure_vacations')}.</p>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <a class="box_feat" href="#0">
                                    <i class="pe-7s-medal"></i>
                                    <h3>{getTranslatedString('quality_service')}</h3>
                                    <p>{getTranslatedString('enjoyable_vacations')}.</p>
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