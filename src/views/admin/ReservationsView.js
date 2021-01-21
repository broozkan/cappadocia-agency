import React from 'react'
import BreadcrumbAdmin from '../../components/Breadcrumb/BreadcrumbAdmin'
import HeaderBox from '../../components/Header/HeaderBox'
import LiReservation from '../../components/List/ListReservation'

const MessagesView = () => {
    return (
        <>
            <BreadcrumbAdmin />
            <div className="box_general">
            <div class="header_box">
                <h2 class="d-inline-block">Rezervasyonlar</h2>
                <a href="/admin/rezervasyon/yeni" class="btn_2 gray approve float-right"><i class="fa fa-fw fa-times-circle-o"></i> Yeni Rezervasyon Ekle</a>
            
            </div>
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