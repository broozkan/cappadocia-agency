import React, { Component } from 'react'


class ListCancellationTerm extends Component {



    render() {


        return (
            <li>{this.props.cancellation_term.cancellation_info_description}</li>
        )
    }

}

export default ListCancellationTerm