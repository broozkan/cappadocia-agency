import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation

} from 'react-router-dom'
import Header from '../components/Header/Header'
import MobileMenu from '../components/Menu/MobileMenu'
import ModalLoginSite from '../components/Modal/ModalLoginSite'
import ModalRegister from '../components/Modal/ModalRegister'
import BasketPageTitle from '../components/PageTitle/BasketPageTitle'
import { CommonContextWrapper } from '../contexts/site/CommonContext'
import AboutUsView from '../views/site/AboutUsView'
import ActivityDetailView from '../views/site/ActivityDetailView'
import ActivityListView from '../views/site/ActivityListView'
import BasketView from '../views/site/BasketView'
import BookingView from '../views/site/BookingView'
import ContactView from '../views/site/ContactView'
import HomeView from '../views/site/HomeView'
import PassengerFormView from '../views/site/PassengerFormView'
import PaymentSuccessView from '../views/site/PaymentSuccessView'
import PaymentView from '../views/site/PaymentView'
import PrivacyContractView from '../views/site/PrivacyContractView'
import RegisterView from '../views/site/RegisterView'
import ResetPasswordView from '../views/site/ResetPasswordView'
import SaleContractView from '../views/site/SaleContractView'
import UserProfileView from '../views/site/UserProfileView'

const RouterSite = (props) => {

    return (
        <Router>
            <CommonContextWrapper>
                <Header />
                <Switch>

                    <Route path="/" exact component={HomeView}></Route>
                    <Route path="/aktivite/detay/" exact component={ActivityDetailView}></Route>
                    <Route path="/aktiviteler/" exact component={ActivityListView}></Route>
                    <Route path="/seferler/" exact component={BookingView}></Route>
                    <Route path="/yolcu-formu/:activityId/:activityDate/:activityBeginningHour/:activityEndingHour/:adultCount/:childCount/" exact component={PassengerFormView}></Route>
                    <Route path="/odeme/" exact component={PaymentView}></Route>
                    <Route path="/odeme/basarili/:conversationId" exact component={PaymentSuccessView}></Route>

                    <Route path="/kayit/" exact component={RegisterView}></Route>
                    <Route path="/parola-sifirla/" exact component={ResetPasswordView}></Route>
                    <Route path="/hesabim/" exact component={UserProfileView}></Route>
                    <Route path="/hakkimizda/" exact component={AboutUsView}></Route>
                    <Route path="/iletisim/" exact component={ContactView}></Route>
                    <Route path="/mesafeli-satis-sozlesmesi/" exact component={SaleContractView}></Route>
                    <Route path="/gizlilik-sozlesmesi/" exact component={PrivacyContractView}></Route>
                </Switch>

            </CommonContextWrapper>

        </Router>
    )

}

export default RouterSite