import axios from 'axios';
import * as types from './types';

export function fetchStashPoints(values) {

    const {lat, lon, min_capacity, active, sort} = values;

    const params = `&centre_lat=${lat}&centre_lon=${lon}&min_capacity=${min_capacity}&active=${active}&${sort}`;

    const request = axios.get(`${types.ROOT_URL}?nearby_radius=3${params}`);

    return {
        type: types.FETCH_STASHPOINTS,
        payload: request
    };
}