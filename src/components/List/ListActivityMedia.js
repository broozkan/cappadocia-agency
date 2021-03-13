import React, { Component } from 'react'


class ListActivityMedia extends Component {



    render() {


        return (
            <li>
                <figure>
                    <img src={process.env.REACT_APP_API_ENDPOINT + 'file/' + this.props.activity.activity_photo_name} style={{ height: 120 }} alt="" />
                    <figcaption>
                        <div class="caption-content">
                            <a href={process.env.REACT_APP_API_ENDPOINT + 'file/' + this.props.activity.activity_photo_name} title="Photo title" data-effect="mfp-zoom-in">
                                <i class="pe-7s-albums"></i>
                                <p>GÖRÜNTÜLE</p>
                            </a>
                        </div>
                    </figcaption>
                </figure>
            </li>
        )
    }

}

export default ListActivityMedia