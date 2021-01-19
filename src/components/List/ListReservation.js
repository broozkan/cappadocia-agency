import React from 'react'


const ListReservation = () => {
    return (
        <li>
            <figure><img src="/img/hotel_1.jpg" alt="" /></figure>
            <h4>Standart Balon Turu <i class="pending">Onay Bekliyor</i></h4>
            <ul class="booking_list">
                <li><strong>Tarih</strong> 11.12.2017</li>
                <li><strong>Toplam Tutar</strong> 200 €</li>
                <li><strong>Ödeme Tipi</strong> Online Ödeme</li>
                <li>
                    <strong>Kişi Sayısı</strong> 2 Kişi
                            |
                        <a href="#">  görüntüle </a>
                </li>
            </ul>
            <p><a href="#0" class="btn_1 gray"><i class="fa fa-fw fa-envelope"></i> Sms Gönder</a></p>
            <ul class="buttons">
                <li><a href="#0" class="btn_1 gray approve"><i class="fa fa-fw fa-check-circle-o"></i> Onayla</a></li>
                <li><a href="#0" class="btn_1 gray delete"><i class="fa fa-fw fa-times-circle-o"></i> İptal Et</a></li>
            </ul>
        </li>
    )
}

export default ListReservation