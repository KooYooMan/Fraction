import * as types from '../actions/action-types';
import { Map, List } from 'immutable';

const initialState = Map({
    screen: 0,
    listQuestion: List([{
        id: 1,
        numerator: 1,
        denominator: 4
    },{
        id: 2,
        numerator: 60,
        denominator: 96
    },{
        id: 3,
        numerator: 75,
        denominator: 100
    }])
});

const StepByStepReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.STEP_BY_STEP_HOME:
            return state.set('screen', 0);
        case types.STEP_BY_STEP_EXAM:
            return state.set('screen', 1);
        case types.STEP_BY_STEP_MODIFY_QUESTION:
            return state.set('listQuestion', List(action.data));
        default:
    }
    return state;
}

export default StepByStepReducer;