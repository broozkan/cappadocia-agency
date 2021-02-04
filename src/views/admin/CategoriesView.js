import React from 'react'
import BreadcrumbAdmin from '../../components/Breadcrumb/BreadcrumbAdmin'
import NavbarAdmin from '../../components/Navbar/NavbarAdmin'
import UnorderedListCategory from '../../components/UnorderedList/UnorderedListCategory'

const CategoriesView = () => {
    return (
        <>
                    <NavbarAdmin />

            <BreadcrumbAdmin />
            <div className="box_general">
            <div class="header_box">
                <h2 class="d-inline-block">Kategoriler</h2>
                <a href="/admin/kategori/yeni" class="btn_2 gray approve float-right"><i class="fa fa-fw fa-times-circle-o"></i> Yeni Kategori Ekle</a>
            
            </div>
            <div className="list_general reviews">
                <UnorderedListCategory />
            </div>
            </div>
        </>
    )
}

export default CategoriesView