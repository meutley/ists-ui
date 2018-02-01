import React from 'react';

import { IstsApi } from '../../Common/Api';

class AuthenticationService {
    static getJwtToken() {
        return localStorage.getItem(IstsApi.AuthToken);
    }

    static persistJwtToken(token) {
        localStorage.setItem(IstsApi.AuthToken, token);
    }

    static login(email, password) {
        const requestBody = {
            email: email,
            password: password
        };
        
        return fetch(IstsApi.AuthenticateUrl, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(requestBody)
        });
    }

    static redirectIfNotLoggedIn(context) {
        return new Promise((resolve, reject) => {
            const token = AuthenticationService.getJwtToken();
            const isAComponent = context instanceof React.Component;
            if (isAComponent && !token) {
                const urlAfterLogin = context.props.match.url;
                context.props.history.replace(`/users/login?url=${urlAfterLogin}`);
            } else {
                resolve();
            }
        });
    }
}

export default AuthenticationService;
