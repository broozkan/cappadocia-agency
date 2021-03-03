import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation

} from 'react-router-dom'
import RouterSite from './RouterSite'
import RouterAdmin from './RouterAdmin'

const RouterMain = (props) => {

    let location = useLocation()
    console.log(location);
    location = location.pathname.split("/")

    
    if(location[1] === "admin"){
        return(
            <RouterAdmin />
        )
    }else{
        return (
            <RouterSite />
        )
    }
    
    

}

export default RouterMain