import React from 'react'
import SectionPopularHotels from '../../components/Section/SectionPopularHotels'
import SectionPopularTours from '../../components/Section/SectionPopularTours'
import SectionPopularActivities from '../../components/Section/SectionPopularActivities'
import Slider from '../../components/Slider/Slider'
import SectionAdventureBanner from '../../components/Section/SectionAdventureBanner'
import SectionParallax from '../../components/Section/SectionParallax'
import Footer from '../../components/Footer/Footer'
import SectionAdventureGrid from '../../components/Section/SectionAdventureGrid'
import ModalLogin from '../../components/Modal/ModalLoginSite'
import ModalForgetPassword from '../../components/Modal/ModalForgetPassword'
import SectionFeedbacks from '../../components/Section/SectionFeedbacks'

const HomeView = () => {


    return (
        <>
            <main>
                <Slider />
                <SectionPopularTours />
                <SectionAdventureGrid />
                <SectionFeedbacks />
                <SectionParallax />
                <Footer />
                <ModalForgetPassword />
            </main>
        </>
    )
}

export default HomeView