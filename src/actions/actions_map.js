import * as types from './types';

export function updateCenterPosition(payload) {
    return {
        type: types.UPDATE_CENTER_POSITION,
        payload
    };

}