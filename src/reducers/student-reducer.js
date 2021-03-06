import * as types from '../actions/action-types';
import { Map } from 'immutable';

const initialState = Map({
    screen: 0
});

const StudentReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.STUDENT_HOME_SCREEN:
            return state.set('screen', 0);
        case types.STUDENT_SIMPLIFYING_FRACTION:
            return state.set('screen', 1);
        case types.STUDENT_SIMPLIFIABLE:
            return state.set('screen', 2);
        case types.STUDENT_STEP_BY_STEP:
            return state.set('screen', 3);
        case types.STUDENT_SIMPLIFY_EVERTHING:
            return state.set('screen', 4);
        case types.STUDENT_WHEN_TO_SIMPLIFY:
            return state.set('screen', 5);
        case types.STUDENT_ENDING_SCREEN:
            return state.set('screen', 6);
        default:
    }
    return state;
}

export default StudentReducer;