import React, { Component } from 'react';

import { AuthenticationService } from '../../Services';

class AuthenticatedComponent extends Component {
    componentWillMount() {
        const token = AuthenticationService.getJwtToken();
        if (!token) {
            const urlAfterLogin = this.props.match.path;
            this.props.history.replace(`/users/login?url=${urlAfterLogin}`);
        }
    }
}

export default AuthenticatedComponent;
