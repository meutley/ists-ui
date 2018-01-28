import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as App from './App';

const AppRoutes = (
    <div>
        <Switch>
            <Route path="/" component={App.AppRoot} />
        </Switch>
    </div>
);

export default AppRoutes;
