import React from 'react'
import {Link} from 'react-router-dom'


const NavbarUserProfile = () => {
    return(
        <nav class="secondary_nav sticky_horizontal">
				<div class="container">
					<ul class="clearfix">
						<li><Link to="/hesabim" class="active">Bilgilerim</Link></li>
						<li><Link to="/satin-aldiklarim">Satın Almalarım</Link></li>
						<li><Link to="/parolami-sifirla">Parolamı Sıfırla</Link></li>
						<li><Link to="#sidebar">Booking</Link></li>
					</ul>
				</div>
			</nav>
    )
}

export default NavbarUserProfile