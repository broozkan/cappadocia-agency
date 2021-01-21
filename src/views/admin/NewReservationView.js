import React from 'react'
import BreadcrumbAdmin from '../../components/Breadcrumb/BreadcrumbAdmin'
import FormReservation from '../../components/Form/FormReservation'

const NewReservationView = () => {
    return (
        <>
            <BreadcrumbAdmin />
            <div className="box_general">
            <div class="header_box">
                <h2 class="d-inline-block">Yeni Rezervasyon Ekle</h2>
                <a href="/admin/rezervasyonlar" class="btn_2 gray approve float-right"><i class="fa fa-fw fa-times-circle-o"></i> Rezervasyonlar</a>
            
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <FormReservation />
                </div>
            </div>
            </div>
        </>
    )
}

export default NewReservationView