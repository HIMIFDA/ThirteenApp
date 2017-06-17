import { combineReducers } from 'redux';
import * as referencesReducer from './references';

export default combineReducers(Object.assign(
    referencesReducer,
));