import React, { Component } from 'react'
import img from '../../images/tour_2.jpg'
import ElementPrice from '../Element/ElementPrice'

class TourItem extends Component {

    render(){
      return(
        <div class="item">
        <div class="box_grid">
          <figure>
            <a href="#0" class="wish_bt"></a>
            <a href={"/aktivite/detay/"+this.props.activity._id}><img src={process.env.REACT_APP_API_ENDPOINT+'file/'+this.props.activity.activity_photos[0].activity_photo_name} class="img-fluid" alt="" width="800" height="533" />
            <div class="read_more">
                <span>Detaylı İncele</span>
                </div>
                </a>
            <small>{this.props.activity.activity_category[0].category_name}</small>
          </figure>
          <div class="wrapper">
            <h3><a href={"/aktivite/detay/"+this.props.activity._id}>{this.props.activity.activity_name}</a></h3>
            <p>{this.props.activity.activity_short_description}</p>
            <span class="price"><strong>{this.props.activity.activity_price} {this.props.activity.activity_currency}</strong> /kişi başı</span>
          </div>
          <ul>
            <li><i class="icon_clock_alt"></i> 1s 30dk</li>
            <li><div class="score"><span>Çok İyi<em>350 Değerlendirme</em></span><strong>9.0</strong></div></li>
          </ul>
        </div>
      </div>
    )
    }
    
}

export default TourItem