import React from 'react';
import { connect } from 'react-redux';


import { getProfileDetails } from '../redux/profile-reducer/profile.action'
import './Profile.css'

class Profile extends React.Component {

    componentDidMount() {
        this.props.getProfileDetails();
    }

    render() {
        const { profileDetails } = this.props;
        console.log(profileDetails);
        return (
            <div className="profile">
                <div className="item-details">
                    <img src={profileDetails.avatar_url} alt="item" />
                    <div style={{ marginLeft: "35%", marginTop: 20 }}>
                        <div><span className="name">{profileDetails.name}</span> </div>

                        <div className="username">{profileDetails.login}</div>
                        <div className="title">{profileDetails.bio}</div>
                        <button style={{width:"100%"}}>Edit Bio </button>
                        <hr />
                        <div className="company">{profileDetails.company}</div>
                        <div className="country">{profileDetails.location}</div>
                        <div className="email">&#9993;{profileDetails.email}</div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    profileDetails: state.ProfileReducer.profileDetails
})

const mapDispatchToprops = dispatch => ({
    getProfileDetails: () => dispatch(getProfileDetails())
})

export default connect(mapStateToProps, mapDispatchToprops)(Profile);