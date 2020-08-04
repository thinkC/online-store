import React, { Component } from 'react'

export default class Callback extends Component {

    componentDidMount() {
        console.log(this.props)
        //Handle authentication if expected values are in the url
        if (/access_token|id_token|error/.test(this.props.location.hash)) {
            this.props.auth.handleAuthentication();
        } else {
            throw new Error('invalid callback URL');
        }
    }
    render() {
        return (
            <h1>Loading...  </h1>


        )
    }
}
