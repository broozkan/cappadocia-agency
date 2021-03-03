import React from 'react'
import { getTranslatedString } from '../../controllers/controller'

const PaymentPageTitle = () => {
    return (
        <div class="hero_in cart_section">
			<div class="wrapper">
				<div class="container">
					<div class="bs-wizard clearfix disabled">
						<div class="bs-wizard-step ">
							<div class="text-center bs-wizard-stepnum">{getTranslatedString('basket')}</div>
							<div class="progress">
								<div class="progress-bar"></div>
							</div>
							<a href="#0" class="bs-wizard-dot"></a>
						</div>

						<div class="bs-wizard-step  active">
							<div class="text-center bs-wizard-stepnum">{getTranslatedString('payment')}</div>
							<div class="progress">
								<div class="progress-bar"></div>
							</div>
							<a href="#0" class="bs-wizard-dot"></a>
						</div>

						<div class="bs-wizard-step disabled">
							<div class="text-center bs-wizard-stepnum">{getTranslatedString('finish')}!</div>
							<div class="progress">
								<div class="progress-bar"></div>
							</div>
							<a href="#0" class="bs-wizard-dot"></a>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default PaymentPageTitle