import React from 'react'
import BreadcrumbAdmin from '../../components/Breadcrumb/BreadcrumbAdmin'
import FormCategory from '../../components/Form/FormCategory'
import NavbarAdmin from '../../components/Navbar/NavbarAdmin';

const UpdateCategoryView = (props) => {
    console.log(props);
    return (
        <>
            <NavbarAdmin />
            <BreadcrumbAdmin />
            <div className="box_general">
                <div class="header_box">
                    <h2 class="d-inline-block">Kategoriyi Düzenle</h2>
                    <a href="/admin/kategoriler" class="btn_2 gray approve float-right"><i class="fa fa-fw fa-times-circle-o"></i> Kategoriler</a>

                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <FormCategory category_id={props.match.params.categoryId} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateCategoryView