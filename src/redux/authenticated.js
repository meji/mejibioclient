import * as ActionTypes from './ActionTypes';
export const Authenticated = (state = {
    errMess:null,
    authenticated: false
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_AUTHENTICATION:
            return{...state, errMess: null, authenticated: action.payload}
        case ActionTypes.AUTHENTICATION_FAILED:
            return{...state, errMess: action.payload, authenticated: false}
        default:
            return state;
    }
}