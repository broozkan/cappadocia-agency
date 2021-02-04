import React, {useEffect} from 'react'

const LogoutView = () => {

    useEffect(() => {
        localStorage.removeItem('admin-auth')
    }, [])

    return (
        <>
            <div className="login-overlay"></div>
            <div className="row">
                <div className="col-lg-5 offset-lg-2">
                    <div className="card card-login">
                        <div className="card-header">
                            <h1>Oturumunuz güvenli bir şekilde kapatılmıştır</h1>
                            <a href="/admin/giris"><span className="fa fa-chevron-left"></span> Tekrar giriş yap</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoutView