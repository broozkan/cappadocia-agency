import React from 'react'
import ButtonGroupActivityListOptions from '../../components/ButtonGroup/ButtonGroupActivityListOptions'
import Footer from '../../components/Footer/Footer'
import FormFilterActivity from '../../components/Form/FormFilterActivity'
import NavbarTourDetail from '../../components/Navbar/NavbarTourDetail'
import SectionActivityDetailContent from '../../components/Section/SectionActivityDetailContent'
import SectionActivityDetailStart from '../../components/Section/SectionActivityDetailStart'
import SectionActivityList from '../../components/Section/SectionActivityList'
import SectionActivityListStart from '../../components/Section/SectionActivityListStart'

const ActivityListView = () => {
    return (
        <>
            <main>
                <SectionActivityListStart />
                <ButtonGroupActivityListOptions />
                <div class="container margin_60_35">
                    <div class="row">
                        <FormFilterActivity />
                        <SectionActivityList />
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}

export default ActivityListView