import React, { Component, useContext } from 'react'
import Footer from '../../components/Footer/Footer'
import NavbarTourDetail from '../../components/Navbar/NavbarTourDetail'
import SectionActivityDetailContent from '../../components/Section/SectionActivityDetailContent'
import SectionActivityDetailStart from '../../components/Section/SectionActivityDetailStart'
import { ActivityDetailWrapper, ActivityDetailContext } from '../../contexts/site/ActivityDetailContext'
import api from '../../services/api'

class ActivityDetailView extends Component {

    constructor(){
        super()
        this.state = {
            activity: ''
        }
    }



    render(){
        return (
            <>
            <ActivityDetailWrapper activity_id={this.props.match.params.activityId} >
                <main>
                    <SectionActivityDetailStart/>
                    <div class="bg_color_1">
                    <NavbarTourDetail/>
                    <SectionActivityDetailContent/>
                    </div>
                    <Footer />
                </main>
            </ActivityDetailWrapper>
           
            </>
        )
    }
    
}

export default ActivityDetailView