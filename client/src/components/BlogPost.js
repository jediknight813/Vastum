import React, {useEffect} from "react";
import { useParams } from 'react-router-dom'
import { GetBlogPostById } from "../actions/BlogPosts";
import { useSelector, useDispatch } from 'react-redux';


const BlogPost = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const BlogpostData = useSelector((state) => state.BlogPosts);

    useEffect(() => {
        dispatch(GetBlogPostById(id));
    },[BlogpostData, dispatch, id])


    return (
        <div className="BlogPostParentContainer">
            <div className="BlogContainer">
                <img alt="blog img" src={BlogpostData.selectedFile}/>
                <h1>{BlogpostData.title}</h1>
                <h2>{BlogpostData.creator}</h2>
                <h3>{BlogpostData.content}</h3>
            </div>
        </div>
    )
}


export default BlogPost

