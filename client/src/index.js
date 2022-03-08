import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import BlogPostParent from './components/BlogPostsParent'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BlogPostParent />
  </React.StrictMode>,
  document.getElementById('root')
);


