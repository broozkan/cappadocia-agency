import React from 'react'
import BreadcrumbAdmin from '../../components/Breadcrumb/BreadcrumbAdmin'
import CardDashboard from '../../components/Card/CardDashboard'
import HeaderBox from '../../components/Header/HeaderBox'
import LiMessage from '../../components/List/ListMessage'
import NavbarAdmin from '../../components/Navbar/NavbarAdmin'

const MessagesView = () => {
    return (
        <>
                    <NavbarAdmin />

            <BreadcrumbAdmin />
            <div className="box_general">
            <HeaderBox />
            <div className="list_general reviews">
            <ul>
                    <LiMessage />
                    <LiMessage />
                    <LiMessage />
                    <LiMessage />
                    <LiMessage />
                    <LiMessage />
                    <LiMessage />
                    <LiMessage />
                    <LiMessage />
            </ul>
            </div>
            </div>
        </>
    )
}

export default MessagesView