import { FETCH_ALL_BLOG_POSTS, ADD_BLOG_POST, UPDATE, GET_BLOG_POST_BY_ID } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

// action creators

export const getBlogPosts = () =>  async (dispatch) => {
    try {
        const { data } = await api.fetchBlogPosts();
        //console.log(data)
        dispatch({type: FETCH_ALL_BLOG_POSTS, payload: data})
    } catch (error) {
        console.log(error)
    }
}


export const createBlogPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createBlogPost(post);
      //console.log(data)
      dispatch({ type: ADD_BLOG_POST, payload: data });

    } catch (error) {
      console.log(error);
    }
  };

  export const updateBlogPost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateBlogPost(id, post);
        //console.log(data)
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const GetBlogPostById = (id) => async (dispatch) => {
    try {
        const { data } = await api.getBlogPostById(id);
        //console.log(data)
        dispatch({ type: GET_BLOG_POST_BY_ID, payload: data });
    } catch (error) {
      console.log(error);
    }
  };