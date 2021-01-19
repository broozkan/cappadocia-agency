import React from 'react'


const ListReview = () => {
    return (
        <li>
            <span>June 15 2017</span>
            <span class="rating"><i class="fa fa-fw fa-star yellow"></i><i class="fa fa-fw fa-star yellow"></i><i class="fa fa-fw fa-star yellow"></i><i class="fa fa-fw fa-star yellow"></i><i class="fa fa-fw fa-star"></i></span>
            <figure><img src="/img/hotel_1.jpg" alt="" /></figure>
            <h4>Burak Özkan <small>Standart Balon Turu için</small></h4>

            <p>Harika bir turdu mutlaka tavsiye ediyorum.</p>
            <ul class="buttons">
                <li><a href="#0" class="btn_1 gray approve"><i class="fa fa-fw fa-check-circle-o"></i> Onayla</a></li>
                <li><a href="#0" class="btn_1 gray delete"><i class="fa fa-fw fa-times-circle-o"></i> İptal Et</a></li>
            </ul>
        </li>
    )
}

export default ListReview