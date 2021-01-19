import React from 'react'
import BreadcrumbAdmin from '../../components/Breadcrumb/BreadcrumbAdmin'
import HeaderBox from '../../components/Header/HeaderBox'
import ListCategory from '../../components/List/ListCategory'

const CategoriesView = () => {
    return (
        <>
            <BreadcrumbAdmin />
            <div className="box_general">
            <div class="header_box">
                <h2 class="d-inline-block">Kategoriler</h2>
                <a href="/admin/kategori/yeni" class="btn_2 gray approve float-right"><i class="fa fa-fw fa-times-circle-o"></i> Yeni Kategori Ekle</a>
            
            </div>
            <div className="list_general reviews">
            <ul>
                    <ListCategory />
                    <ListCategory />
                    <ListCategory />
                    <ListCategory />
                    <ListCategory />
                    <ListCategory />
            </ul>
            </div>
            </div>
        </>
    )
}

export default CategoriesView