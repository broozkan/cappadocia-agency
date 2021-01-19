import React from 'react'
import BreadcrumbAdmin from '../../components/Breadcrumb/BreadcrumbAdmin'
import HeaderBox from '../../components/Header/HeaderBox'
import LiReservation from '../../components/List/ListReservation'

const MessagesView = () => {
    return (
        <>
            <BreadcrumbAdmin />
            <div className="box_general">
            <HeaderBox />
            <div className="list_general reviews">
            <ul>
                    <LiReservation />
                    <LiReservation />
                    <LiReservation />
                    <LiReservation />
                    <LiReservation />
                    <LiReservation />
            </ul>
            </div>
            </div>
        </>
    )
}

export default MessagesView