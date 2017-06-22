import { combineReducers } from 'redux';
import * as postsReducer from './posts';
import * as tabReducer from './tab';

export default combineReducers(Object.assign(
    postsReducer,
    tabReducer
));