import React, { Component, useContext } from 'react'
import Footer from '../../components/Footer/Footer'
import NavbarTourDetail from '../../components/Navbar/NavbarTourDetail'
import SectionActivityDetailContent from '../../components/Section/SectionActivityDetailContent'
import SectionActivityDetailStart from '../../components/Section/SectionActivityDetailStart'
import { ActivityDetailWrapper, ActivityDetailContext } from '../../contexts/site/ActivityDetailContext'
import api from '../../services/api'
import queryString from 'query-string'
import { CommonContext } from '../../contexts/site/CommonContext'
import UnorderedListActivityGallery from '../../components/UnorderedList/UnorderedListActivityGallery'

class ActivityDetailView extends Component {

    static contextType = CommonContext

    constructor() {
        super()
        this.state = {
            activity: ''
        }
    }

    async componentDidMount() {
        const urlParams = await queryString.parse(this.props.location.search);

        const activity = await api.get('/activity/get/' + urlParams.activity)


        this.context.setActivity(activity.data)
        this.context.setisActivityLoaded(true)

    }

    render() {

        console.log(this.context);
        return (
            <>
                <main>
                    <SectionActivityDetailStart />
                    <div class="bg_color_1">
                        <NavbarTourDetail />
                        <SectionActivityDetailContent />
                    </div>
                    <Footer />
                </main>

            </>
        )
    }

}

export default ActivityDetailView