import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
    <div>
        <App user='Dinesh'>This guy is awesome!</App>
    </div>,
    document.getElementById('mainContent')
);
