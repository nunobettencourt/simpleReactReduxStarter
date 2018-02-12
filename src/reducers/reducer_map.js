import * as types from '../actions/types';

export default function (state = {}, action ) {
    switch(action.type) {
        case types.UPDATE_CENTER_POSITION:

            const { lat, lon } = action.payload;
            return {
                lat,
                lon
            };
        default:
            return state;
    }
}