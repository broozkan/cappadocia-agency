import React from 'react'

const PaymentPageTitle = () => {
    return (
        <div class="hero_in cart_section">
			<div class="wrapper">
				<div class="container">
					<div class="bs-wizard clearfix disabled">
						<div class="bs-wizard-step ">
							<div class="text-center bs-wizard-stepnum">SEPET</div>
							<div class="progress">
								<div class="progress-bar"></div>
							</div>
							<a href="#0" class="bs-wizard-dot"></a>
						</div>

						<div class="bs-wizard-step  active">
							<div class="text-center bs-wizard-stepnum">ÖDEME</div>
							<div class="progress">
								<div class="progress-bar"></div>
							</div>
							<a href="#0" class="bs-wizard-dot"></a>
						</div>

						<div class="bs-wizard-step disabled">
							<div class="text-center bs-wizard-stepnum">BİTİŞ!</div>
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