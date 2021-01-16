import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavbarTourDetail from '../../components/Navbar/NavbarTourDetail'
import SectionActivityDetailContent from '../../components/Section/SectionActivityDetailContent'
import SectionActivityDetailStart from '../../components/Section/SectionActivityDetailStart'

const ActivityDetailView = () => {
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

export default ActivityDetailView