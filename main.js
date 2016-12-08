import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
    <div>
        <App user='dinesh' food='Lime Pickle'/>
        <App user='Abner' food='Mango Lassi'/>
        <App user='Addison' food='Medu Vada'/>
    </div>,
    document.getElementById('mainContent')
);