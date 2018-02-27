import { combineReducers } from 'redux';
import DefaultReducer from './reducer_default';

const rootReducer = combineReducers({
    default: DefaultReducer
});

export default rootReducer;