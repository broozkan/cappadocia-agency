import React from 'react'
import BreadcrumbAdmin from '../../components/Breadcrumb/BreadcrumbAdmin'
import FormCategory from '../../components/Form/FormCategory'
import HeaderBox from '../../components/Header/HeaderBox'
import ListCategory from '../../components/List/ListCategory'
import NavbarAdmin from '../../components/Navbar/NavbarAdmin'

const CategoriesView = () => {
    return (
        <>
        <NavbarAdmin />
            <BreadcrumbAdmin />
            <div className="box_general">
            <div class="header_box">
                <h2 class="d-inline-block">Yeni Kategori Ekle</h2>
                <a href="/admin/kategoriler" class="btn_2 gray approve float-right"><i class="fa fa-fw fa-times-circle-o"></i> Kategoriler</a>
            
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <FormCategory />
                </div>
            </div>
            </div>
        </>
    )
}

export default CategoriesView