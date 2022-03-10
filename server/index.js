import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import BlogPostRoutes from './routes/BlogPosts.js'


const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());


app.use('/blog_posts', BlogPostRoutes)


app.get('/', (req, res) => {
    res.send('hello from vastum blog api')
})


const PORT = process.env.PORT || 5000;


mongoose.connect((process.env.CONNECTION_URL))
 .then(() => app.listen(PORT, () => console.log("server running on port: 5000")))
 .catch((error) => console.log(error.message));