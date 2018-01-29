import React, { Component } from 'react';

import * as Services from '../Services';
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
                    <Meui.Textbox value={this.state.email} name="email" placeholder="Email" onChange={this.handleChange.bind(this)} />
                    <br/>
                    <Meui.Textbox value={this.state.password} name="password" placeholder="Password" onChange={this.handleChange.bind(this)} />
                    <br/>
                    <Meui.Button value="Search" type={Meui.ButtonType.Submit} />
                </form>
            </div>
        );
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.doLogin();
    }

    doLogin() {
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
            }).catch((err) => {
                this.setState({ loginFailed: true, loginFailedReason: err.message });
            });
    }
}

export default Login;
