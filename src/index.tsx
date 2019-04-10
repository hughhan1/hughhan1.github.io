import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import AboutPage from './components/about-page';
import BlogPage from './components/blog-page';
import ContactPage from './components/contact-page';
import HomePage from './components/home-page';

import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Route path="/" exact component={HomePage} />
    <Route path="/about/" component={AboutPage} />
    <Route path="/blog/" component={BlogPage} />
    <Route path="/contact/" component={ContactPage} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
