import React, { Component, useContext, useEffect } from 'react'
import { ActivityDetailContext } from '../../contexts/site/ActivityDetailContext'




const SectionActivityDetailStart = () => {

	const activityDetailContext = useContext(ActivityDetailContext)

	// render activity photos
	let activityPhotosHtml = ''
	if (activityDetailContext.is_activity_loaded) {
		activityPhotosHtml = activityDetailContext.activity.activity_photos.map((item) => {
			return(
				<a href={process.env.REACT_APP_API_ENDPOINT+'file/'+item.activity_photo_name} class="btn_photos" title="Photo title" data-effect="mfp-zoom-in">Fotoğrafları Görüntüle</a>
	
			)
		})
	
	}
	
	return (
		<section class="hero_in tours_detail start_bg_zoom">
			<div class="wrapper">
				<div class="container">
					<h1 class="fadeInUp animated"><span></span>
						{activityDetailContext.activity.activity_name}
					</h1>
				</div>
				<span class="magnific-gallery">
					{activityPhotosHtml}
				</span>
			</div>
		</section>
	)



}

export default SectionActivityDetailStart