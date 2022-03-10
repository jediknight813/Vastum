import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


// components
import Header from './components/Header.js';
import BlogPostParent from './components/BlogPostsParent'
import CreateBlogPost from './components/CreateBlogPost'
import BlogPost from './components/BlogPost';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const store = createStore(reducers, compose(applyMiddleware(thunk)));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/home" element={<BlogPostParent />} />
            <Route path="/new_blog_post" element={<CreateBlogPost />} />
            <Route path="/blog_post/:id" element={<BlogPost /> } />
          </Routes>
      </BrowserRouter>
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);


