import express from 'express';
import mongoose from 'mongoose';

import BlogPost from '../models/BlogPost.js';

const router = express.Router();

export const getBlogPosts = async (req, res) => { 
    try {
        const BlogPost = await BlogPost.find();
                
        res.status(200).json(BlogPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createBlogPost = async (req, res) => {
    const post = req.body;

    const newPost = new BlogPost(post)

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409),json({ message: error.message })
    }
}

export const updateBlogPost = async (req, res) => {
    const { id } = req.params;
    const { title, content, creator, selectedFile, comments } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog post with id: ${id}`);

    const updatedBlogPost = { title, content, creator, selectedFile, comments };

    await BlogPost.findByIdAndUpdate(id, updatedBlogPost, { new: true });

    res.json(updatedBlogPost);
}

