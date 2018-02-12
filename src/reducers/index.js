import { combineReducers } from 'redux';
import stashpointsReducer from './reducer_stashpoints';
import mapReducer from './reducer_map';

const rootReducer = combineReducers({
    stashpoints: stashpointsReducer,
    map: mapReducer
});

export default rootReducer;