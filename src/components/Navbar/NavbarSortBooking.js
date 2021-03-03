import React from 'react'
import { getTranslatedString } from '../../controllers/controller'


const NavbarSortBooking = () => {
	return (
		<nav class="secondary_nav sticky_horizontal navbar-sort-booking">
			<div class="container">
				<ul class="clearfix">
					<li><a href="#description" class="active">{getTranslatedString('booking_sort_lowest')}</a></li>
					<li><a href="#reviews">{getTranslatedString('booking_sort_highest')}</a></li>
					<li><a href="#reviews"><span className="fa fa-percent"></span> {getTranslatedString('booking_sort_discount')}</a></li>
					<li></li>
				</ul>
			</div>
		</nav>
	)
}

export default NavbarSortBooking