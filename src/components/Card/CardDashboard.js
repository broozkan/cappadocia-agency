import React from 'react'


const CardDashboard = () => {

    return (
        <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card dashboard text-white bg-primary o-hidden h-100">
                <div class="card-body">
                    <div class="card-body-icon">
                        <i class="fa fa-fw fa-envelope-open"></i>
                    </div>
                    <div class="mr-5"><h5>26 Yeni Rezervasyon!</h5></div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="messages.html">
                    <span class="float-left">Detay Gör</span>
                    <span class="float-right">
                        <i class="fa fa-angle-right"></i>
                    </span>
                </a>
            </div>
        </div>
    )

}

export default CardDashboard