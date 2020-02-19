import * as ActionTypes from './ActionTypes';
export const Bio = (state = {
    errMess:null,
    isLoading: true,
    bios: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_BIO:
            return{...state, isLoading:false, errMess: null, bios: action.payload}
        case ActionTypes.BIO_LOADING:
            return{...state, isLoading:true, errMess: null, bios: []}
        case ActionTypes.BIO_FAILED:
            return{...state, isLoading:false, errMess: action.payload, bios: []}
        default:
            return state;
    }
}
