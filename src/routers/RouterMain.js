import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    useRouteMatch

} from 'react-router-dom'
import RouterSite from './RouterSite'
import RouterAdmin from './RouterAdmin'

const RouterMain = (props) => {

    let location = useLocation()
    console.log(location);
    location = location.pathname.split("/")

    const routeMatch = useRouteMatch()
    console.log(routeMatch);
    if (routeMatch.params.language) {
        if (localStorage.getItem('language') != routeMatch.params.language) {
            localStorage.setItem('language', routeMatch.params.language)
            window.location.reload()

        }
    }

    console.log(location);

    if (location[1] === "admin") {
        return (
            <RouterAdmin />
        )
    } else {
        return (
            <RouterSite />
        )
    }



}

export default RouterMain