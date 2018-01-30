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
}

export default AuthenticationService;
