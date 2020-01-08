import Axios from "axios";
import ProfileActionTypes from './profile.types';

export const getProfileDetails = () => {
    return async (dispatch) => {
      await  Axios.get('https://api.github.com/users/supreetsingh247')
            .then(({ data }) => {
                dispatch(getProfileAction(data));
            });
    }
}

 const getProfileAction = (data) => {
    return {
        type:ProfileActionTypes.GET_PROFILE_DETAILS,
        payload: data
    }
}