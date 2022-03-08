import mongoose from "mongoose";


const BlogPostSchema = mongoose.Schema({
    title: String,
    content: String,
    creator: String,
    comments: [Object],
    selectedFile: String,
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);


export default BlogPost;