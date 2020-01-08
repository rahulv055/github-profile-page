import ProfileActionTypes from './profile.types';

const INTIAL_STATE = {
    profileDetails:{}
}


const ProfileReducer = (state=INTIAL_STATE,action) => {
    switch(action.type){
        case ProfileActionTypes.GET_PROFILE_DETAILS:
            return {
                ...state,
                profileDetails: action.payload
            }
        default:
            return state
    }
}


export default ProfileReducer;