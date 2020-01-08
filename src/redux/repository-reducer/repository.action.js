import Axios from "axios";
import RepositoryActionTypes from './repository.types';

export const getRepositoryList = () => {
    return async (dispatch) => {
      await  Axios.get('https://api.github.com/users/supreetsingh247/repos')
            .then(({ data }) => {
                dispatch(getRepositoryListAction(data));
            });
    }
}

 const getRepositoryListAction = (data) => {
    return {
        type:RepositoryActionTypes.GET_REPOSITORY_LIST,
        payload: data
    }
}

export const searchRepositoryListAction = (data) => {
    return {
        type:RepositoryActionTypes.SEARCH_REPOSITORY,
        payload: data
    }
}