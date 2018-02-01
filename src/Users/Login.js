import React, { Component } from 'react';

import * as Services from '../Services';
import * as Forms from '../Common/Forms';
import * as Meui from '../Meui';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            loginFailed: false,
            loginFailedReason: ''
        };
    }
    
    render() {
        const failure = this.state.loginFailed
            ? <span>{this.state.loginFailedReason}</span>
            : '';
        
        return (
            <div className="login-form">
                {failure}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Meui.Textbox value={this.state.email} placeholder="Email" onChange={Forms.HandleTextboxChange(this, 'email')} />
                    <br/>
                    <Meui.Textbox type={Meui.TextboxType.Password} value={this.state.password} placeholder="Password" onChange={Forms.HandleTextboxChange(this, 'password')} />
                    <br/>
                    <Meui.Button value="Log In" type={Meui.ButtonType.Submit} />
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        this.doLogin(this.state.email, this.state.password);
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
                    throw new Error('An unexpected error occurred. If the problem persists, please email support.');
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

export default Login;
