import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation

} from 'react-router-dom'
import RouterSite from './RouterSite'

const RouterMain = (props) => {

    let location = useLocation()
    location = location.pathname.split("/")

    
    if(location[1] === "admin"){
        
    }else{
        return (
            <RouterSite />
        )
    }
    
    

}

export default RouterMain