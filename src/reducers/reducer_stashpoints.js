import _ from 'lodash';
import * as types from '../actions/types';

export default function (state = {}, action ) {
    switch(action.type) {
        case types.FETCH_STASHPOINTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}