import React from 'react'


const NavbarSortBooking = () => {
    return(
        <nav class="secondary_nav sticky_horizontal navbar-sort-booking">
				<div class="container">
					<ul class="clearfix">
						<li><a href="#description" class="active">Önce en düşük fiyat</a></li>
						<li><a href="#reviews">Önce en yüksek fiyat</a></li>
						<li><a href="#reviews"><span className="fa fa-percent"></span> İndirime Göre</a></li>
						<li></li>
					</ul>
				</div>
			</nav>
    )
}

export default NavbarSortBooking