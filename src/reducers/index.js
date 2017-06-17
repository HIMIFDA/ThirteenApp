import { combineReducers } from 'redux';
import * as referencesReducer from './references';
import * as tabReducer from './tab';

export default combineReducers(Object.assign(
    referencesReducer,
    tabReducer
));