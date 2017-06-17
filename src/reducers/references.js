import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedReferences = createReducer({}, {
    [types.SET_SEARCHED_REFERENCES](state, action) {
        return action.references;
    } 
});

export const recipeCount = createReducer(0, {
    [types.SET_SEARCHED_REFERENCES](state, action) {
        return action.references.length;
    } 
});