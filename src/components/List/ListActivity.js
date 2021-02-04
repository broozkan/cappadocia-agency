import React, { Component } from 'react'


class ListActivity extends Component {
    
    

    render(){
        let photo = ''
        if (this.props.activity.activity_photos[0]) {
            photo = this.props.activity.activity_photos[0].activity_photo_name
        }

        return (
            <li>
                <figure><img src={process.env.REACT_APP_API_ENDPOINT + 'file/' + photo} alt="" /></figure>
                <h4>{this.props.activity.activity_name}</h4>
                <ul class="booking_list">
                    <li><strong>Kişi Başı Fiyat</strong> {this.props.activity.activity_price} {this.props.activity.activity_currency}</li>
                    <li><strong>Kategori</strong> {this.props.activity.activity_category[0].category_name}</li>
                    <li><strong>Kısa açıklama</strong> {this.props.activity.activity_short_description}</li>
              
                </ul>
                <ul class="buttons">
                    <li><a href={"/admin/aktivite/duzenle/"+this.props.activity._id} class="btn_1 gray approve"><i class="fa fa-fw fa-check-circle-o"></i> Düzenle</a></li>
                    <li><a data-id={this.props.activity._id} onClick={this.props.onClick} class="btn_1 gray delete"><i class="fa fa-fw fa-times-circle-o"></i> Sil</a></li>
                </ul>
            </li>
        )
    }
    
}

export default ListActivity