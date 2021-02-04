import React from 'react'
import BreadcrumbAdmin from '../../components/Breadcrumb/BreadcrumbAdmin'
import FormActivity from '../../components/Form/FormActivity'
import NavbarAdmin from '../../components/Navbar/NavbarAdmin'

const NewActivityView = () => {
    return (
        <>
                    <NavbarAdmin />
        
            <BreadcrumbAdmin />
            <div className="box_general">
            <div class="header_box">
                <h2 class="d-inline-block">Yeni Aktivite Ekle</h2>
                <a href="/admin/aktiviteler" class="btn_2 gray approve float-right"><i class="fa fa-fw fa-times-circle-o"></i> Aktiviteler</a>
            
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <FormActivity />
                </div>
            </div>
            </div>
        </>
    )
}

export default NewActivityView