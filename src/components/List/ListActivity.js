import React from 'react'


const ListActivity = () => {
    return (
        <li>
            <figure><img src="/img/hotel_1.jpg" alt="" /></figure>
            <h4>Standart Balon Turu</h4>
            <ul class="booking_list">
                <li><strong>Kişi Başı Fiyat</strong> 100 €</li>
                <li><strong>Aktif Kontenjan</strong> 5</li>
                <li><strong>Kategori</strong> Balon Turları</li>
                <li><strong><a href="#">Kontenjanları gör</a></strong></li>
            </ul>
            <ul class="buttons">
                <li><a href="#0" class="btn_1 gray approve"><i class="fa fa-fw fa-check-circle-o"></i> Düzenle</a></li>
                <li><a href="#0" class="btn_1 gray delete"><i class="fa fa-fw fa-times-circle-o"></i> Sil</a></li>
            </ul>
        </li>
    )
}

export default ListActivity