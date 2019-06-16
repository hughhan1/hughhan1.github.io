import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {RoutesMap} from './common/routes';

import AboutPage from './components/about-page';
import ContactPage from './components/contact-page';
import HomePage from './components/home-page';

import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Route path={RoutesMap.home} exact component={HomePage} />
    <Route path={RoutesMap.about} component={AboutPage} />
    {/* TODO: support blog */}
    {/* <Route path={RoutesMap.blog} component={BlogPage} /> */}
    <Route path={RoutesMap.contact} component={ContactPage} />

    {/* TODO: support blog */}
    {/* <Route path={BlogRoutesMap['the-great-ocean-road']} component={TheGreatOceanRoad} /> */}
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
