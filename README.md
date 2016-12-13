# Learning reactjs - Children

[![N|Solid](http://img.crx4chrome.com/4f/46/55/jaaklebbenondhkanegppccanebkdjlh-icon.png)](https://facebook.github.io/react/)

React created interactive UIs. It creates encapsulated views for the react application that manages their own state.

### Routing

```sh
import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import routes from './routes.js';

ReactDom.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('mainContent')
);

```
### routes.js

```sh
import React from 'react'
import App from './App'
import Login from './Login'
import {Route} from 'react-router';

export default (
    <Route>
        <Route path='/login' component={Login}/>
        <Route path='/' component={App} />
    </Route>
);
```