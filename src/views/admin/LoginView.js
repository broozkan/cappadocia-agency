import React from 'react'
import FormLoginAdmin from '../../components/Form/FormLoginAdmin'

const LoginView = () => {
    return (
        <>
            <div className="login-overlay"></div>
            <div className="row">
                <div className="col-lg-5 offset-lg-2">
                    <div className="card card-login">
                        <div className="card-header">
                            <h3>
                            Yönetim Paneli | turkeyballoonscappadocia.com

                            </h3>
                        </div>
                        <div className="card-body">
                            <FormLoginAdmin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginView