import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const currentTab = createReducer('', {
    [types.SET_ACTIVE_TAB](state, action) {
        return action.activeTab;
    } 
});
