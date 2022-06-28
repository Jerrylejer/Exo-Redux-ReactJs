import axios from 'axios';
import { LOAD_API, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR } from "./type";

const loadApi = () =>  {
    return {
        type: LOAD_API,
    };
};

const loadCommentSuccess = (comments) =>  {
    return {
        type: LOAD_COMMENTS_SUCCESS,
        payload: comments
    };
};

const loadCommentsError = (error) =>  {
    return {
        type: LOAD_COMMENTS_ERROR,
        payload: error
    };
};

export const apiCall = () => {
    // retourne une callback qui prend nos 3 actions
    return dispatch => {
        // LOAD_API
        dispatch(loadApi());
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            // LOAD_COMMENTS_SUCCESS
            dispatch(loadCommentSuccess(res.data));
        })
        .catch(error => {
            // LOAD_COMMENTS_ERROR
            dispatch(loadCommentsError(error.message))
        })
    }
}