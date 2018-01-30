import React, { Component } from 'react';

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
        if (this.props.handleSubmit && typeof this.props.handleSubmit === 'function') {
            this.props.handleSubmit(this.state.email, this.state.password);
        }
    }
}

export default Login;
