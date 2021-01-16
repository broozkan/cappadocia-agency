import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavbarUserProfile from '../../components/Navbar/NavbarUserProfile'
import UserProfilePageTitle from '../../components/PageTitle/UserProfilePageTitle'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation

} from 'react-router-dom'
import FormPersonalInformation from '../../components/Form/FormPersonalInformation'
import TablePreviousPurchases from '../../components/Table/TablePreviousPurchases'
import FormResetPassword from '../../components/Form/FormResetPassword'

const UserProfileView = () => {
    return (
        <>

            <main>
                <UserProfilePageTitle />
                <div class="bg_color_1" style={{ transform: 'none' }}>
                    <div class="container margin_60_35" style={{ transform: 'none' }}>
                        <Router>
                            <NavbarUserProfile />
                            <div className="tab-content-wrapper p-4">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <Switch>
                                            <Route path="/hesabim" component={FormPersonalInformation}></Route>
                                            <Route path="/satin-aldiklarim" component={TablePreviousPurchases}></Route>
                                            <Route path="/parolami-sifirla" component={FormResetPassword}></Route>
                                        </Switch>
                                    </div>
                                </div>


                            </div>

                        </Router>

                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}

export default UserProfileView