import React from 'react'
import img from '../../images/tour_3.jpg'

const FeedbackItem = (props) => {

    return (
        <div class="item">
            <a href="#0">
                <h4>{props.comment.comment_author}</h4>
                <blockquote>"{props.comment.comment}"</blockquote>
            </a>
        </div>
    )
}

export default FeedbackItem