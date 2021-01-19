import React from 'react'
import Footer from '../../components/Footer/Footer'
import SectionActivityDetailContent from '../../components/Section/SectionActivityDetailContent'
import BookingPageTitle from '../../components/PageTitle/BookingPageTitle'
import FormResearchBooking from '../../components/Form/FormResearchBooking'
import BookingItem from '../../components/Item/BookingItem'
import NavbarSortBooking from '../../components/Navbar/NavbarSortBooking'

const BookingView = () => {
    return (
        <>
        <main>
            <BookingPageTitle />
            <div className="container margin_60_35">
                <div className="col-lg-12">
                <FormResearchBooking />
                <NavbarSortBooking />
                <hr></hr>
                </div>
                <div className="isotope-wrapper mt-1" style={{position: 'relative', height: '1700px'}}>
                    <BookingItem />
                    <BookingItem />
                    <BookingItem />
                    <BookingItem />
                    <BookingItem />
                </div>
            </div>
            <Footer />
        </main>
        </>
    )
}

export default BookingView