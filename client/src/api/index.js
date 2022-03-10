import axios from 'axios';

const url = 'http://localhost:5000/blog_posts';

export const fetchBlogPosts = () => axios.get(url);
export const createBlogPost = (newPost) => axios.post(url, newPost);
export const updateBlogPost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const getBlogPostById = (id) => axios.patch(`${url}/${id}/getBlogPost`);