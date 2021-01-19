import React from 'react'
import BreadcrumbAdmin from '../../components/Breadcrumb/BreadcrumbAdmin'
import HeaderBox from '../../components/Header/HeaderBox'
import ListReview from '../../components/List/ListReview'

const ReviewsView = () => {
    return (
        <>
            <BreadcrumbAdmin />
            <div className="box_general">
            <HeaderBox />
            <div className="list_general reviews">
            <ul>
                    <ListReview />
                    <ListReview />
                    <ListReview />
                    <ListReview />
                    <ListReview />
                    <ListReview />
            </ul>
            </div>
            </div>
        </>
    )
}

export default ReviewsView