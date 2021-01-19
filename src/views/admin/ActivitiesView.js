import React from 'react'
import BreadcrumbAdmin from '../../components/Breadcrumb/BreadcrumbAdmin'
import HeaderBox from '../../components/Header/HeaderBox'
import ListActivity from '../../components/List/ListActivity'

const ActivitiesView = () => {
    return (
        <>
            <BreadcrumbAdmin />
            <div className="box_general">
            <div class="header_box">
                <h2 class="d-inline-block">Aktiviteler</h2>
                <a href="/admin/aktivite/yeni" class="btn_2 gray approve float-right"><i class="fa fa-fw fa-times-circle-o"></i> Yeni Aktivite Ekle</a>
            
            </div>
            <div className="list_general reviews">
            <ul>
                    <ListActivity />
                    <ListActivity />
                    <ListActivity />
                    <ListActivity />
                    <ListActivity />
                    <ListActivity />
            </ul>
            </div>
            </div>
        </>
    )
}

export default ActivitiesView