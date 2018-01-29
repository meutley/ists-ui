const IstsApiUrl = 'http://localhost:5000/api/users';
const IstsRegisterUrl = IstsApiUrl + '/register';
const IstsAuthenticateUrl = IstsApiUrl + '/authenticate';

const IstsAuthTokenKey = 'ists-auth-token'

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
