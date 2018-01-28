import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import AppRoutes from './AppRoutes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        {AppRoutes}
    </Router>
), document.getElementById('root'));
registerServiceWorker();
