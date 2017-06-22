import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const posts = createReducer([], {
    [types.SET_FETCHED_POSTS_LIST](state, action) {
        return action.posts;
    } 
});

export const post = createReducer([], {
    [types.SET_FETCHED_POST](state, action) {
        return action.post;
    } 
});