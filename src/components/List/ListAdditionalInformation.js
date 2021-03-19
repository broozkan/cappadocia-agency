import React, { Component } from 'react'


class ListAdditionalInformation extends Component {


    render() {
        return (
            <li>{this.props.additional_information.additional_info_title} - {this.props.additional_information.additional_info_value}</li>
        )
    }

}

export default ListAdditionalInformation