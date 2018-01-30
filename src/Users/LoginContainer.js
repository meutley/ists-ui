import React, { Component } from 'react';

import * as Services from '../Services';

import Login from './Login';

class LoginContainer extends Component {
    render() {
        return <Login />;
    }

    handleSubmit(email, password) {
        this.doLogin(email, password);
    }

    doLogin() {
        const params = new URLSearchParams(this.props.location.search);
        const urlAfterLogin = params.get('url');
        
        Services.AuthenticationService
            .login(this.state.email, this.state.password)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                if (res.status === 401) {
                    throw new Error('Invalid email/password');
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then((res) => {
                Services.AuthenticationService.persistJwtToken(res.token);
                this.props.history.push(urlAfterLogin);
            }).catch((err) => {
                this.setState({ loginFailed: true, loginFailedReason: err.message });
            });
    }
}

export default LoginContainer;
