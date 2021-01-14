import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation

} from 'react-router-dom'
import Header from '../components/Header/Header'
import MobileMenu from '../components/Menu/MobileMenu'
import HomeView from '../views/site/HomeView'

const RouterSite = (props) => {



    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={HomeView}></Route>
            </Switch>
        </Router>
    )

}

export default RouterSite