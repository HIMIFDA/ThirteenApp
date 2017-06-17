import * as types from './types';


export function setActiveTab(activeTab = 'Home') {
    return {
        type: types.SET_ACTIVE_TAB,
        activeTab
    }
}
