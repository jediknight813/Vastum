import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import '../styles/Styles.css'
import { createBlogPost, updateBlogPost } from '../actions/BlogPosts.js';
import {useNavigate} from 'react-router-dom';


const Form = ({ currentId, setCurrentId }) => {
  const [blogPostData, setBlogPostData] = useState({ creator: '', title: '', content: '', selectedFile: '', comments: [] });
  const blogPost = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    if (blogPost) setBlogPostData(blogPost);
  }, [blogPost]);

  const clear = () => {
    //setCurrentId(0);
    setBlogPostData({ creator: '', title: '', content: '', selectedFile: '', comments: [] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createBlogPost(blogPostData));
    clear()
    navigate("/home")

    //if (currentId === 0) {
    //  dispatch(createBlogPost(blogPostData));
    //  clear();
    //} else {
    //  dispatch(updateBlogPost(currentId, blogPostData));
    //  clear();
    //}
  };

  return (
    <div className="BlogPostParentContainer">
        <div className='BlogContainer'>
        <form autoComplete="off" noValidate onSubmit={handleSubmit} className="create_blog_post_parent">
            <h1> create new blog post</h1>

            <h2> Picture </h2>
            <div style={{"width": "170px"}}> <FileBase type="file" multiple={false} onDone={({ base64 }) => setBlogPostData({ ...blogPostData, selectedFile: base64 })} /></div>
            
            <h2> Title </h2>
            <input name="title"  label="Title" value={blogPostData.title} onChange={(e) => setBlogPostData({ ...blogPostData, title: e.target.value })} />
            
            <h2> Creator </h2>
            <input name="creator" label="Creator" value={blogPostData.creator} onChange={(e) => setBlogPostData({ ...blogPostData, creator: e.target.value })} />
            
            <h2> Content </h2>
            <textarea name="content" type="text" label="Content" multiline rows={4} value={blogPostData.content} onChange={(e) => setBlogPostData({ ...blogPostData, content: e.target.value })} />

            <button type="submit" fullWidth>Submit</button>
            <button onClick={clear} fullWidth>Clear</button>

        </form>
        </div>
    </div>
  );
};

export default Form;