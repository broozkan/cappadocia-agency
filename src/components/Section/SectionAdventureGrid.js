import React from 'react'
import img from '../../images/adventure_latest_2.jpg'
import img2 from '../../images/adventure_latest_1.jpg'
import img3 from '../../images/adventure_latest_3.jpg'
import img4 from '../../images/adventure_latest_4.jpg'
import img5 from '../../images/adventure_latest_5.jpg'

const SectionAdventureGrid = () => {
	return (
		<div class="banner-adventure-grid-wrapper  mb-0">
			<div class="opacity-mask p-5" data-opacity-mask="rgba(0, 0, 0, 0.3)">
				<div class="main_title_3"><span><em></em></span><h2 className="text-white">Farklı Deneyimler</h2><p className="text-white">Daha farklı aktiviteler ile seyehatinize çeşitlilik katın</p></div>
				<div className="row">
					<div class="col-xl-6 col-lg-6 col-md-6">
						<a href="restaurant-detail.html" class="grid_item latest_adventure">
							<figure>
								<img src={img} class="img-fluid" alt="" />
								<div class="info">
									<em>EŞSİZ KAPADOKYA MANZARASI İLE</em>
									<h3>Kapadokya Balon Turu Yapın</h3>
								</div>
							</figure>
						</a>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6">
						<div className="row">
							<div class="col-xl-6 col-lg-6 col-md-6">
								<a href="restaurant-detail.html" class="grid_item latest_adventure">
									<figure>
										<img src={img5} class="img-fluid" alt="" />
										<div class="info">
											<em>RAHAT EDİN</em>
											<h3>Eşsiz Konaklama Deneyimleyin</h3>
										</div>
									</figure>
								</a>
							</div>
							<div class="col-xl-6 col-lg-6 col-md-6">
								<a href="restaurant-detail.html" class="grid_item latest_adventure">
									<figure>
										<img src={img2} class="img-fluid" alt="" />
										<div class="info">
											<em>SPOR İLE BİRLEŞTİRİN</em>
											<h3>Bisiklet Turlarına Katılın</h3>
										</div>
									</figure>
								</a>
							</div>
							<div class="col-xl-8 col-lg-6 col-md-6">
								<a href="restaurant-detail.html" class="grid_item latest_adventure">
									<figure>
										<img src={img3} class="img-fluid" style={{height: '275px'}} alt="" />
										<div class="info">
											<em>TARİHE YAKINDAN BAKIN</em>
											<h3>Yer Altı Şehrini Gezin</h3>
										</div>
									</figure>
								</a>
							</div>
							<div class="col-xl-4 col-lg-6 col-md-6">
								<a href="restaurant-detail.html" class="grid_item latest_adventure">
									<figure>
										<img src={img4} class="img-fluid" style={{height: '275px'}} alt="" />
										<div class="info">
											<em>İYİ HİSSEDİN</em>
											<h3>Güzel Pozlar Yakalayın</h3>
										</div>
									</figure>
								</a>
							</div>
						</div>
						
					</div>

				</div>
				<div className="row">

				</div>
			</div>
		</div>
	)
}

export default SectionAdventureGrid