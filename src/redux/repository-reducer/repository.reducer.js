import RepositoryActionTypes from './repository.types';

const INITIAL_STATE = {
    repositoryList:[],
    repositoryListSearch:[]
}

const RepositoryReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case RepositoryActionTypes.GET_REPOSITORY_LIST:
            return {
                ...state,
                repositoryList: action.payload,
                repositoryListSearch:action.payload
            }
        case RepositoryActionTypes.SEARCH_REPOSITORY:
            return {
                ...state,
                repositoryList: state.repositoryListSearch.filter(item => {
                    const itemData = item.full_name.toUpperCase();
                    const textData = action.payload.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                })
            }    
        default:
            return state
    }
}

export default RepositoryReducer;
