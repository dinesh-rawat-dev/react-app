import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
    <div>
        <App user='Dinesh'>I am a child</App>
    </div>,
    document.getElementById('mainContent')
);
