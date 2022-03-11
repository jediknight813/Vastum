import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import { GetBlogPostById } from "../actions/BlogPosts";
import { useSelector, useDispatch } from 'react-redux';
import { updateBlogPost } from '../actions/BlogPosts.js';


const BlogPost = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const BlogpostData = useSelector((state) => state.BlogPosts);
    const [MessageData, setMessageData] = useState({title: '', message: '' });

    const clear = () => {
        setMessageData({title: '', message: '' });
      };
    

    useEffect(() => {
        dispatch(GetBlogPostById(id));
    },[BlogpostData, dispatch, id])


    const handleSubmit = async (e) => {
        BlogpostData['comments'].push(MessageData)
        dispatch(updateBlogPost(id, BlogpostData));
        clear()
    }

    if (BlogpostData.comments !== undefined) {
        return (
            <div className="BlogPostParentContainer">
                <div className="BlogPostContainer">
                    <img alt="blog img" src={BlogpostData.selectedFile}/>
                    <h1>{BlogpostData.title}</h1>
                    <h2>by {BlogpostData.creator}</h2>
                    <h3>{BlogpostData.content}</h3>
    
    
                    <h2>Messages</h2>
                    {BlogpostData.comments.map((BlogData) => (
                        <div className="comment_container">
                            <h1>by {BlogData.title}</h1>
                            <h2>{BlogData.message}</h2>
                        </div>
                     ))}
    
    
                    <div className="new_comment_container">
                        <h2> Name </h2>
                        <input name="title"  label="Title" value={MessageData.title} onChange={(e) => setMessageData({ ...MessageData, title: e.target.value })} />
                        
                        <h2> Comment </h2>
                        <input className="comment_form_container" name="title"  label="Title" value={MessageData.message} onChange={(e) => setMessageData({ ...MessageData, message: e.target.value })} />
    
                        <button onClick={() => handleSubmit()} type="submit">Submit</button>
                    </div>
    
    
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="BlogPostParentContainer">
                <div className="BlogPostContainer">
                    <h1> Loading... </h1>
                </div>
            </div>
        )
    }
   
}


export default BlogPost

