import React, { useState, createContext, setState, useEffect } from 'react'

export const CommonContext = createContext()

export const CommonContextWrapper = (props) => {

    const [activity, setActivity] = useState('')
    const [isActivityLoaded, setisActivityLoaded] = useState(false)
    const [preReservation, setPreReservation] = useState('')
    const [isPreReservationLoaded, setIsPreReservationLoaded] = useState(false)


    useEffect(()=>{
        if (localStorage.getItem('pre_reservation_data')) {
            const preReservationData = JSON.parse(localStorage.getItem('pre_reservation_data'))
            setPreReservation(preReservationData)
            setIsPreReservationLoaded(true)
        }
    },[])



    return (
        <CommonContext.Provider value={{
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
