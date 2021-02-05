import React, { Component, useContext, useEffect } from 'react'
import { ActivityDetailContext } from '../../contexts/site/ActivityDetailContext'
import { CommonContext } from '../../contexts/site/CommonContext'



class SectionActivityDetailStart extends Component {

	static contextType = CommonContext

	render() {

		// render activity photos
		let activityPhotosHtml = ''
		if (this.context.isActivityLoaded) {
			activityPhotosHtml = this.context.activity.activity_photos.map((item) => {
				return (
					<a href={process.env.REACT_APP_API_ENDPOINT + 'file/' + item.activity_photo_name} class="btn_photos" title="Photo title" data-effect="mfp-zoom-in">Fotoğrafları Görüntüle</a>

				)
			})

		}

		return (
			<section class="hero_in tours_detail start_bg_zoom">
				<div class="wrapper">
					<div class="container">
						<h1 class="fadeInUp animated"><span></span>
							{this.context.activity.activity_name}
						</h1>
					</div>
					<span class="magnific-gallery">
						{activityPhotosHtml}
					</span>
				</div>
			</section>
		)
	}




}

export default SectionActivityDetailStart