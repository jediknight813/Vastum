import React, {useEffect} from "react";
import '../styles/Styles.css'
import { useSelector, useDispatch } from 'react-redux';
import { getBlogPosts, GetBlogPostById } from "../actions/BlogPosts";
import {useNavigate} from 'react-router-dom';


const BlogPostParent = () => {
    const dispatch = useDispatch();
    const Blogposts = useSelector((state) => state.BlogPosts);
    const navigate = useNavigate();
    

    useEffect(() => {
        dispatch(getBlogPosts());
    },[Blogposts, dispatch])

    console.log(Blogposts)

    return(
        <div className="BlogPostParentContainer">
            <div className="BlogContainer">
            {Blogposts.map((BlogData) => (
                <div  onClick={() => navigate(`/blog_post/${BlogData._id}`)}className="blog_post_clickible_parent">
                    <img alt="blog img" src={BlogData.selectedFile} />
                    <h1>{BlogData.title}</h1>
                    <h2> made by {BlogData.creator}</h2>
                </div>
             ))}
            </div>
        </div>
    )
}


export default BlogPostParent