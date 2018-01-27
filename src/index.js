import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import AppRoutes from './AppRoutes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        {AppRoutes}
    </Router>
), document.getElementById('root'));
registerServiceWorker();
