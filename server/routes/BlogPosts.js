import express from "express";

import { getBlogPosts, createBlogPost, updateBlogPost } from "../controllers/BlogPosts.js";

const router = express.Router();

router.get('/', getBlogPosts);

router.post('/', createBlogPost);

router.patch('/:id', updateBlogPost)

export default router;

