import { FETCH_ALL_BLOG_POSTS, ADD_BLOG_POST, GET_BLOG_POST_BY_ID} from '../constants/actionTypes.js';


// eslint-disable-next-line import/no-anonymous-default-export
export default (blogPosts = [], action) => {
    switch (action.type) {
        case FETCH_ALL_BLOG_POSTS:
            return action.payload;
        case GET_BLOG_POST_BY_ID:
            return action.payload;
        case ADD_BLOG_POST:
            return [...blogPosts, action.payload];
        default:
            return blogPosts;
    }
}

