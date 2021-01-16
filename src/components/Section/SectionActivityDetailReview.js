import React from 'react'
import ReviewContainer from '../Review/ReviewContainer'
import ReviewSummary from '../Review/ReviewSummary'


const SectionActivityDetailReview = () => {


    return(
        <section id="reviews">
						<h2>Reviews</h2>
						<div class="reviews-container">
							<div class="row">
								<div class="col-lg-3">
									<ReviewSummary />
								</div>
							</div>
						</div>

						<hr></hr>

						<ReviewContainer />
					</section>
    )
}

export default SectionActivityDetailReview