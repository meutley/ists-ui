import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import * as Home from './Home';
import * as Studios from './Studios';

const AppRoutes = (
    <div>
        <Switch>
            <Route exact path="/" component={Home.Home} />
            
            <Redirect exact from="/studios" to="/studios/search" />
            <Route exact path="/studios/search" component={Studios.Search} />
            <Route exact path="/studios/:id" component={Studios.View} />
        </Switch>
    </div>
);

export default AppRoutes;
