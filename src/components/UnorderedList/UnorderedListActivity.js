import React, { useState, useEffect } from 'react'
import Pagination from '../Pagination/Pagination'
import api from '../../services/api'
import ListActivity from '../List/ListActivity'
import FormFilterActivity from '../Form/FormFilterActivity'
import ModalQuotaList from '../Modal/ModalQuotaList'

const UnorderedListActivity = () => {

    
    const [state, setState] = useState({
        activities: [],
        pagination_info: [],
        is_activities_loaded: ''
    })



    useEffect(() => {
        getActivities()
    }, [])


    const getActivities = async (page = 1, filters = {}) => {
        setState({
            ...state,
            is_activities_loaded: false
        })


        const activities = await api.get('/activity/list/' + page, { params: filters })
        console.log(activities);
        setState({
            ...state,
            activities: activities.data.docs,
            pagination_info: activities.data,
            is_activities_loaded: true
        })

    }


    const handleDeleteClick = (e) => {

        const submitResponse = api.delete('/activity/delete/' + e.target.dataset.id)

        console.log(submitResponse);

    }


    let activitiesHtml = ''
    if (state.is_activities_loaded) {
        activitiesHtml = state.activities.map((item) => {
            return (
                <ListActivity onClick={handleDeleteClick} activity={item} />
            )
        })
    }


    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <FormFilterActivity getActivities={getActivities} />
                </div>
            </div>
            <ul>
                {activitiesHtml}
            </ul>
            <div className="row">
                <div className="col-lg-12">
                    <Pagination object={state.pagination_info} onClick={getActivities} />
                </div>
            </div>
        </>
    )
}

export default UnorderedListActivity