import React, { useState, createContext, setState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import api from '../../services/api'

export const AdminContext = createContext()

export const AdminContextWrapper = (props) => {

    const [state, setState] = useState({
        is_user_logged_in: false
    })

    const [multipleQuotaInformations, setMultipleQuotaInformations] = useState()

    const location = useLocation()



    useEffect(() => {

        if (!localStorage.getItem('admin-auth')) {
            if (location.pathname == "/admin/giris" || location.pathname == "/admin/cikis") {

            } else {
                window.location.href = '/admin/giris'
            }
        }
    }, [])


    const updateState = (key, value, cb) => {
        setState({
            ...state,
            [key]: value
        })

        cb(true)
    }





    return (
        <AdminContext.Provider value={{
            state: state,
            updateState: updateState,
            setMultipleQuotaInformations: setMultipleQuotaInformations,
            multipleQuotaInformations: multipleQuotaInformations
        }}>
            {props.children}
        </AdminContext.Provider>
    )

}
