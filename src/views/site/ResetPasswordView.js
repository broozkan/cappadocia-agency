import React from 'react'
import FormResetPassword from '../../components/Form/FormResetPassword'

const ResetPasswordView = () => {
    return (
        <>

            <div id="login">
                <aside>
                    <div className="mt-5">
                        <FormResetPassword />
                    </div>

                    <div class="copy">© 2018 Panagea</div>
                </aside>
            </div>
        </>
    )
}

export default ResetPasswordView