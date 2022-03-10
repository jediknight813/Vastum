import express from "express";

import { getBlogPosts, createBlogPost, updateBlogPost, getBlogPostFromId } from "../controllers/BlogPosts.js";

const router = express.Router();

router.get('/', getBlogPosts);

router.post('/', createBlogPost);

router.patch('/:id', updateBlogPost)

router.patch('/:id/getBlogPost', getBlogPostFromId)

export default router;

