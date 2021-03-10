import React, { useState, createContext, setState, useEffect } from 'react'
import { useLocation, useRouteMatch } from 'react-router-dom'

export const CommonContext = createContext()

export const CommonContextWrapper = (props) => {

    const [language, setLanguage] = useState('tr')
    const [activity, setActivity] = useState('')
    const [isActivityLoaded, setisActivityLoaded] = useState(false)
    const [preReservation, setPreReservation] = useState('')
    const [isPreReservationLoaded, setIsPreReservationLoaded] = useState(false)


    useEffect(() => {
        const currentLanguage = localStorage.getItem('language')

        if(currentLanguage){
            setLanguage(currentLanguage)
        }else{
            setLanguage('tr')
            window.location.reload()
        }
        


        if (localStorage.getItem('pre_reservation_data')) {
            const preReservationData = JSON.parse(localStorage.getItem('pre_reservation_data'))
            setPreReservation(preReservationData)
            setIsPreReservationLoaded(true)
        }
    }, [])



    return (
        <CommonContext.Provider value={{
            language: language,
            activity: activity,
            setActivity: setActivity,
            preReservation: preReservation,
            setPreReservation: setPreReservation,
            isActivityLoaded: isActivityLoaded,
            isPreReservationLoaded: isPreReservationLoaded,
            setisActivityLoaded: setisActivityLoaded,
            setIsPreReservationLoaded: setIsPreReservationLoaded
        }}
        >
            {props.children}
        </CommonContext.Provider>
    )

}
