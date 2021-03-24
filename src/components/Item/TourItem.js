import React, { Component } from 'react'
import { getTranslatedString } from '../../controllers/controller'
import img from '../../images/tour_2.jpg'
import ElementPrice from '../Element/ElementPrice'

class TourItem extends Component {

  render() {
    return (
      <div className="item">
        <div className="box_grid">
          <figure>
            <a href="#0" className="wish_bt"></a>
            <a href={"/aktivite/detay/?activity=" + this.props.activity._id}><img src={process.env.REACT_APP_API_ENDPOINT + 'file/' + this.props.activity.activity_photos[0].activity_photo_name} className="img-fluid" alt="" width="800" height="533" />
              <div className="read_more">
                <span>{getTranslatedString('tour_item_show_details')}</span>
              </div>
            </a>
            <small>{this.props.activity.activity_category[0].category_name}</small>
          </figure>
          <div className="wrapper">
            <h3><a href={"/aktivite/detay/?activity=" + this.props.activity._id}>{this.props.activity.activity_name}</a></h3>
            <p>{this.props.activity.activity_short_description}</p>
            <span className="price"><strong>{this.props.activity.activity_price} {this.props.activity.activity_currency}</strong> / {getTranslatedString('per_person')}</span>
          </div>
          <ul>
            <li><i className="icon_clock_alt"></i> {this.props.activity.activity_duration}</li>
            <li><div className="score"><span>{this.props.activity.activity_rating_text}<em>{this.props.activity.activity_view_count} {getTranslatedString('review')}</em></span><strong>{this.props.activity.activity_rating}</strong></div></li>
          </ul>
        </div>
      </div>
    )
  }

}

export default TourItem