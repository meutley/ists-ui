import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Navbar } from './Navbar';
import * as Home from '../Home';
import * as Studios from '../Studios';

import './AppRoot.css';

class AppRoot extends Component {
    render() {
        return (
            <div className="app-root">
                <Navbar />
                <div className="app-content-wrapper">
                    <Switch>
                        <Route exact path="/" component={Home.Home} />
                        <Redirect exact from="/studios" to="/studios/search" />
                        <Route exact path="/studios/search" component={Studios.Search} />
                        <Route exact path="/studios/:friendlyUrl" component={Studios.ViewContainer} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default AppRoot;
