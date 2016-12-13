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
