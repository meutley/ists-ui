import { AuthenticationService } from '../../Services';

class AuthenticatedFetch {
    static perform(context, url, options = {}) {
        options.headers = options.headers || new Headers();
        options.headers.append('Authorization', `Bearer ${AuthenticationService.getJwtToken()}`);
        return fetch(url, options).then((res) => {
            if (res.status === 401 && context) {
                context.props.history.push('/users/login');
            } else {
                if (res.ok) {
                    return res.json();
                } else {
                    return res;
                }
            }
        });
    }
}

export default AuthenticatedFetch;
