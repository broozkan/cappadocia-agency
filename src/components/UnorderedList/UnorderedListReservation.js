import React, { useState, useEffect } from 'react'
import Pagination from '../Pagination/Pagination'
import api from '../../services/api'
import ListReservation from '../List/ListReservation'
import FormFilterReservation from '../Form/FormFilterReservation'
import ModalQuotaList from '../Modal/ModalQuotaList'

const UnorderedListReservation = () => {

    
    const [state, setState] = useState({
        reservations: [],
        pagination_info: [],
        is_reservations_loaded: ''
    })



    useEffect(() => {
        getReservations()
    }, [])


    const getReservations = async (page = 1, filters = {}) => {
        setState({
            ...state,
            is_reservations_loaded: false
        })


        const reservations = await api.get('/reservation/list/' + page, { params: filters })
        console.log(reservations);
        setState({
            ...state,
            reservations: reservations.data.docs,
            pagination_info: reservations.data,
            is_reservations_loaded: true
        })

    }




    let reservationsHtml = ''
    if (state.is_reservations_loaded) {
        reservationsHtml = state.reservations.map((item) => {
            return (
                <ListReservation getReservations={getReservations} reservation={item} />
            )
        })
    }


    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <FormFilterReservation getReservations={getReservations} />
                </div>
            </div>
            <ul>
                {reservationsHtml}
            </ul>
            <div className="row">
                <div className="col-lg-12">
                    <Pagination object={state.pagination_info} onClick={getReservations} />
                </div>
            </div>
        </>
    )
}

export default UnorderedListReservation