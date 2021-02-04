
import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { CommonContext } from '../../contexts/site/CommonContext'
import api from '../../services/api'
import Pagination from '../Pagination/Pagination'

class TableBasketItems extends Component {

    static contextType = CommonContext
    constructor() {
        super()

        this.state = {
            basket_items: [],
            pagination_info: [],
            is_basket_items_loaded: false
        }
        this.handleDeleteBasketItem = this.handleDeleteBasketItem.bind(this)
    }







    async handleDeleteBasketItem(e) {


        e.preventDefault()

        const submitResponse = await api.delete('/basket/delete/' + e.target.dataset.basket_item_id)

        if (submitResponse.data.response) {
            Swal.fire({
                title: "Başarılı",
                text: 'Sepetten çıkarıldı',
                icon: 'success'
            })
            this.context.getBasketItems()
        } else {
            Swal.fire({
                title: "Hata!",
                text: submitResponse.data.responseData,
                icon: 'error'
            })
        }

    }



    render() {

        // render basket items
        let basketItemsHtml = ''
        if (this.context.state.is_basket_items_loaded) {
            basketItemsHtml = this.context.state.basket_items.map((item) => {

                const totalPassenger = parseInt(item.basket_mature_count) + parseInt(item.basket_child_count)

                return (
                    <tr>
                        <td>
                            <div class="thumb_cart">
                                <img src={process.env.REACT_APP_API_ENDPOINT + 'file/' + item.basket_activity[0].activity_photos[0].activity_photo_name} alt="Image" />
                            </div>
                            <span class="item_cart">{item.basket_activity[0].activity_name}</span>
                        </td>
                        <td>{totalPassenger}</td>
                        <td>
                            <strong>{item.basket_total} {item.basket_activity[0].activity_currency}</strong>
                        </td>
                        <td class="options" style={{ width: '5%', textAlign: 'center' }}>
                            <a href="#" onClick={this.handleDeleteBasketItem} data-basket_item_id={item._id} >
                                Sil
                                </a>
                        </td>
                    </tr>
                )
            })
        }

        return (
            <>
                <table class="table table-striped cart-list">
                    <thead>
                        <tr>
                            <th>AKTİVİTE</th>
                            <th>TOPLAM KİŞİ</th>
                            <th>TUTAR</th>
                            <th>İŞLEM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {basketItemsHtml}

                    </tbody>
                </table>

                <div class="cart-options clearfix">

                    <div class="float-right fix_mobile">
                        <button type="button" onClick={this.context.getBasketItems} class="btn_1 outline">Sepeti Güncelle</button>
                    </div>
                </div>
            </>
        )
    }

}

export default TableBasketItems