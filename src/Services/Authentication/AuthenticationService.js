import { IstsApi } from '../../Common/Api';
const IstsRegisterUrl = IstsApi.UsersUrl + '/register';
const IstsAuthenticateUrl = IstsApi.UsersUrl + '/authenticate';

const IstsAuthTokenKey = 'ists-auth-token';

class AuthenticationService {
    static getJwtToken() {
        return localStorage.getItem(IstsAuthTokenKey);
    }

    static persistJwtToken(token) {
        localStorage.setItem(IstsAuthTokenKey, token);
    }

    static login(email, password) {
        const requestBody = {
            email: email,
            password: password
        };
        
        return fetch(IstsAuthenticateUrl, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(requestBody)
        });
    }
}

export default AuthenticationService;
