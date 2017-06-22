import * as types from './types';
import Api from '../lib/api';

export function fetchPostsList() {
    return (dispatch, getState) => {
        return Api.get(`/blog/get`)
                .then( resp => {
                    dispatch(setFetchedPostsList( {posts: resp.posts} ) );
                })
                .catch( (ex) => {      
                    console.log(ex);
                });
    }
}

export function setFetchedPostsList( {posts} ) {
    return {
        type: types.SET_FETCHED_POSTS_LIST,
        posts
    }
}

export function fetchPost(postId) {
    return (dispatch, getState) => {
        return Api.get(`/blog/get/${postId}`)
                .then( resp => {
                    dispatch(setFetchedPost( {post: resp.post} ) );
                })
                .catch( (ex) => {      
                    console.log(ex);
                });
    }
}

export function setFetchedPost( {post} ) {
    return {
        type: types.SET_FETCHED_POST,
        post
    }
}
