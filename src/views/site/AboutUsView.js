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
                                        <p>Önceliğimiz müşteri memnuniyeti <strong>ve en önemlisi keyifli bir tatil</strong>. Buralar birlikte doldurulacak. Buralar birlikte doldurulacak. Buralar birlikte doldurulacak. Buralar birlikte doldurulacak. Buralar birlikte doldurulacak. Buralar birlikte doldurulacak. Buralar birlikte doldurulacak. </p>
                                        <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore <strong>percipitur definitiones</strong> ex, nihil utinam recusabo mel no. Dolores reprehendunt no sit, quo cu viris theophrastus. Sit unum efficiendi cu.</p>
                                        <p><em>CEO Vahit Serttaş</em></p>
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
                            <CardAboutUs />
                            <CardAboutUs />
                            <CardAboutUs />

                        </div>
                       
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}

export default AboutUsView