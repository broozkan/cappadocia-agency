import React from 'react'
import { getTranslatedString } from '../../controllers/controller'


const NavbarTourDetail = () => {
    return(
        <nav class="secondary_nav sticky_horizontal">
				<div class="container">
					<ul class="clearfix">
						<li><a href="#description" class="active">{getTranslatedString('activity_detail_navbar_activity_detail')}</a></li>
						<li><a href="#reviews">{getTranslatedString('reviews')}</a></li>
						<li><a href="#sidebar"></a></li>
					</ul>
				</div>
			</nav>
    )
}

export default NavbarTourDetail