import * as types from './types';

export function defaultAction() {
    return {
        type: types.DEFAULT_ACTION,
        payload: 'default action'
    }
}
