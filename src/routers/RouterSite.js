import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation

} from 'react-router-dom'
import Header from '../components/Header/Header'
import MobileMenu from '../components/Menu/MobileMenu'
import BasketPageTitle from '../components/PageTitle/BasketPageTitle'
import AboutUsView from '../views/site/AboutUsView'
import ActivityDetailView from '../views/site/ActivityDetailView'
import ActivityListView from '../views/site/ActivityListView'
import BasketView from '../views/site/BasketView'
import ContactView from '../views/site/ContactView'
import HomeView from '../views/site/HomeView'
import PaymentView from '../views/site/PaymentView'
import RegisterView from '../views/site/RegisterView'
import ResetPasswordView from '../views/site/ResetPasswordView'
import UserProfileView from '../views/site/UserProfileView'

const RouterSite = (props) => {



    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={HomeView}></Route>
                <Route path="/aktivite/detay/:activityId" exact component={ActivityDetailView}></Route>
                <Route path="/aktiviteler/" exact component={ActivityListView}></Route>
                <Route path="/sepet/" exact component={BasketView}></Route>
                <Route path="/odeme/" exact component={PaymentView}></Route>
                <Route path="/kayit/" exact component={RegisterView}></Route>
                <Route path="/parola-sifirla/" exact component={ResetPasswordView}></Route>
                <Route path="/hesabim/" exact component={UserProfileView}></Route>
                <Route path="/hakkimizda/" exact component={AboutUsView}></Route>
                <Route path="/iletisim/" exact component={ContactView}></Route>
            </Switch>
        </Router>
    )

}

export default RouterSite