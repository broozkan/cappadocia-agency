import React from 'react'
import SidebarAdmin from '../Sidebar/SidebarAdmin'


const NavbarAdmin = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-default fixed-top" id="mainNav">
			<a class="navbar-brand" href="index.html"><img src="/img/logo.png" data-retina="true" alt="" width="150" height="36" /></a>
			<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<SidebarAdmin />
				<ul class="navbar-nav sidenav-toggler">
					<li class="nav-item">
						<a class="nav-link text-center" id="sidenavToggler">
							<i class="fa fa-fw fa-angle-left"></i>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavbarAdmin