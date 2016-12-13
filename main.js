import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import routes from './routes.js';

ReactDom.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('mainContent')
);
