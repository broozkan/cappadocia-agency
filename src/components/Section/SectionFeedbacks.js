
import React from 'react'
import { Component } from 'react'
import FeedbackItem from '../Item/FeedbackItem'

class SectionFeedbacks extends Component {





	render() {



		return (
			<>
			<div className="container margin_80_55">
			<div class="main_title_2">
					<span><em></em></span>
					<h2>Değerli Yorumlarınız</h2>
					<p>Sizin mutluluğunuz bizim işimizi aşkla yapmamızı sağlıyor</p>
				</div>
				<div id="carousel" class="owl-carousel owl-theme">


					<FeedbackItem />
					<FeedbackItem />
					<FeedbackItem />
					<FeedbackItem />
					<FeedbackItem />
					<FeedbackItem />
					<FeedbackItem />
					<FeedbackItem />
					<FeedbackItem />
					<FeedbackItem />
					<FeedbackItem />
					<FeedbackItem />
					<FeedbackItem />
					<FeedbackItem />
				</div>
			</div>
				
			</>
		)
	}


}

export default SectionFeedbacks