import React from 'react'

const ListCategory = (props) => {


    return (
        <li>
            <figure><img src="/img/hotel_1.jpg" alt="" /></figure>
            <h4>{props.category.category_name}</h4>
            <p>{props.category.category_description}</p>

            <ul class="buttons">
                <li><a href={"/admin/kategori/duzenle/"+props.category._id} class="btn_1 gray approve"><i class="fa fa-fw fa-check-circle-o"></i> Düzenle</a></li>
                <li><a data-id={props.category._id} onClick={props.onClick} class="btn_1 gray delete"><i class="fa fa-fw fa-times-circle-o"></i> Sil</a></li>
            </ul>
        </li>
    )
}

export default ListCategory