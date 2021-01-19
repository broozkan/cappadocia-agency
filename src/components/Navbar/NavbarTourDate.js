import React from 'react'


const NavbarTourDate = () => {
	return (
		<nav class="secondary_nav sticky_horizontal text-center">
			<div class="container">
				<ul class="clearfix">
					<li><a href="#description" class="active">Standart Balon Turu</a></li>
					<li>
						<input type="date" className="form-control" />
					</li>
					<li>
						<select className="form-control">
							<option value="" disabled>Kişi seçiniz</option>
							<option>1 Kişi</option>
							<option>2 Kişi</option>
							<option selected>3 Kişi</option>
						</select>
					</li>
					<li>
						<button className="btn_1 full-width purchase">Yeniden Ara</button>
					</li>
					<li></li>
				</ul>
			</div>
		</nav>
	)
}

export default NavbarTourDate