import React from 'react'
import BreadcrumbAdmin from '../../components/Breadcrumb/BreadcrumbAdmin'
import CardDashboard from '../../components/Card/CardDashboard'
import NavbarAdmin from '../../components/Navbar/NavbarAdmin'

const DashboardView = () => {
    return (
        <>
            <BreadcrumbAdmin />
            <div className="row">
                <CardDashboard />
                <CardDashboard />
                <CardDashboard />
                <CardDashboard />
            </div>
        </>
    )
}

export default DashboardView