import React from 'react'


const SidebarAdmin = () => {
    return (
        <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Dashboard">
                <a class="nav-link" href="/admin/">
                    <i class="fa fa-fw fa-dashboard"></i>
                    <span class="nav-link-text"> Yönetim</span>
                </a>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Messages">
                <a class="nav-link" href="/admin/mesajlar">
                    <i class="fa fa-fw fa-envelope-open"></i>
                    <span class="nav-link-text"> Mesajlar</span>
                </a>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Bookings">
                <a class="nav-link" href="/admin/rezervasyonlar">
                    <i class="fa fa-fw fa-calendar-check-o"></i>
                    <span class="nav-link-text"> Rezervasyonlar <span class="badge badge-pill badge-primary">6 Yeni</span></span>
                </a>
            </li>
            
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Reviews">
                <a class="nav-link" href="/admin/degerlendirmeler">
                    <i class="fa fa-fw fa-star"></i>
                    <span class="nav-link-text"> Değerlendirmeler/Yorumlar</span>
                </a>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Add listing">
                <a class="nav-link" href="/admin/kategoriler">
                    <i class="fa fa-fw fa-list"></i>
                    <span class="nav-link-text"> Kategoriler</span>
                </a>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Add listing">
                <a class="nav-link" href="/admin/aktiviteler">
                    <i class="fa fa-fw fa-cubes"></i>
                    <span class="nav-link-text"> Aktiviteler</span>
                </a>
            </li>
            
        </ul>
    )
}

export default SidebarAdmin