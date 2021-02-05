import React, {useState, createContext, setState, useEffect, useContext} from 'react'
import api from '../../services/api'
import { CommonContext } from './CommonContext'

export const ActivityDetailContext = createContext()

export const ActivityDetailWrapper = (props) => {

    const commonContext = useContext(CommonContext)

    const [state, setState] = useState({
        activity: '',
        is_activity_loaded: false
    })


    useEffect(()=>{
        

        if (props.activity_id) {
            getActivity()
        }

    },[])

    
    
    const getActivity = async () => {
        const activity = await api.get('/activity/get/'+props.activity_id)

        

        setState({
            ...state,
            activity: activity.data,
            is_activity_loaded: true
        })
    }


    return(
        <ActivityDetailContext.Provider value={state}>
            {props.children}
        </ActivityDetailContext.Provider>
    )

}
