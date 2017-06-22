import * as types from './types';
import Api from '../lib/api';

export function fetchReferences(classReference) {
    return (dispatch, getState) => {
        return Api.get(`/references/get/${classReference}`)
                .then( resp => {    
                    dispatch(setSearchedReferences( {references: resp.references} ) );
                })
                .catch( (ex) => {
                    console.log(ex);
                });
    }
}

export function setSearchedReferences( {references} ) {
    return {
        type: types.SET_SEARCHED_REFERENCES,
        references
    }
}

export function addRecipe() {
    return {
        type: types.ADD_RECIPE
    }
}
