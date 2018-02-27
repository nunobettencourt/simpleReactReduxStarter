import * as types from '../actions/types';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.DEFAULT_ACTION:
            return {};
        default:
            return state;
    }
}
