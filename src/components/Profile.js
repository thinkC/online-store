import React, { Component } from 'react'

export default class Profile extends Component {
    state = {
        profile: null,
        error: ''
    }

    componentDidMount() {
        this.loadUserProfile()

    }

    loadUserProfile() {
        this.props.auth.getProfile((profile, error) => {
            this.setState({ profile, error })
        })
    }

    render() {
        const { profile } = this.state;
        if (!profile) return null;
        return (
            <>
                <div className="container">
                    <h1 className="text-center">From Profile</h1>
                    <p>{profile.nickname}</p>
                    <img style={{ maxWidth: 50, maxHeight: 50 }} src={profile.pcture} alt="profile pic" /><br></br>
                    {/* <pre>{JSON.stringify(profile, null, 2)}</pre> */}
                    <br />
                    <p>{profile.given_name}</p>
                    <p>{profile.family_name}</p>
                    <p>updated: {profile.updated_at}</p>
                    <p>email: {profile.email}</p>
                    <p>email verified: {profile.email_verified}</p>
                </div>
            </>
        )
    }
}
