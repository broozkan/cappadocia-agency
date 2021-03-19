import React from 'react'
import { Component } from 'react'
import BreadcrumbAdmin from '../../components/Breadcrumb/BreadcrumbAdmin'
import CardDashboard from '../../components/Card/CardDashboard'
import NavbarAdmin from '../../components/Navbar/NavbarAdmin'
import api from '../../services/api'

class DashboardView extends Component {

    constructor() {
        super()

        this.state = {
            pending_reservations: [],
            is_pending_reservations_loaded: false
        }
    }

    async componentDidMount() {
        const reservations = await api.get('/reservation/list/1', { params: { 'reservation_verification': 'pending' } })

        this.setState({
            pending_reservations: reservations.data.docs,
            is_pending_reservations_loaded: true
        })
    }

    render() {

        let pendingReservationsCardJsx = ''
        if (this.state.is_pending_reservations_loaded) {
            pendingReservationsCardJsx = (
                <CardDashboard url={`/admin/rezervasyonlar`} title={`${this.state.pending_reservations.length} Onay Bekleyen Rezervasyon!`} />
            )
        }

        return (
            <>
                <NavbarAdmin />
                <BreadcrumbAdmin />
                <div className="row">
                    {pendingReservationsCardJsx}
                </div>
            </>
        )
    }

}

export default DashboardView