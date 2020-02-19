import * as ActionTypes from './ActionTypes';
export const Courses = (state = {
    errMess:null,
    isLoading: true,
    courses: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_COURSES:
            return{...state, isLoading:false, errMess: null, courses: action.payload}
        case ActionTypes.COURSES_LOADING:
            return{...state, isLoading:true, errMess: null, courses: []}
        case ActionTypes.COURSES_FAILED:
            return{...state, isLoading:false, errMess: action.payload, courses: []}
        default:
            return state;
    }
}