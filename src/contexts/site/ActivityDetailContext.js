import React, {useState, createContext, setState, useEffect} from 'react'
import api from '../../services/api'

export const ActivityDetailContext = createContext()

export const ActivityDetailWrapper = (props) => {

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
        console.log(activity);
        setState({
            activity: activity.data,
            is_activity_loaded: true
        })
    }

    console.log(state);

    return(
        <ActivityDetailContext.Provider value={state}>
            {props.children}
        </ActivityDetailContext.Provider>
    )

}
