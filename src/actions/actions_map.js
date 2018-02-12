import * as types from './types';

export function updateCenterPsition(payload) {
    return {
        type: types.UPDATE_CENTER_POSITION,
        payload
    };

}