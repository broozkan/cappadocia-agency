import React from 'react'


const ListCategory = () => {
    return (
        <li>
            <figure><img src="/img/hotel_1.jpg" alt="" /></figure>
            <h4>Balon Turları</h4>
            <p>Balon turları kategorisi</p>

            <ul class="buttons">
                <li><a href="#0" class="btn_1 gray approve"><i class="fa fa-fw fa-check-circle-o"></i> Düzenle</a></li>
                <li><a href="#0" class="btn_1 gray delete"><i class="fa fa-fw fa-times-circle-o"></i> Sil</a></li>
            </ul>
        </li>
    )
}

export default ListCategory