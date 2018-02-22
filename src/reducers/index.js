import { combineReducers } from 'redux';
import mapReducer from './reducer_map';

const rootReducer = combineReducers({
    map: mapReducer
});

export default rootReducer;