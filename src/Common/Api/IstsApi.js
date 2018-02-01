const IstsApi = {
    BaseUrl: 'http://localhost:5000/api',
    StudiosUrl: '/studios',
    StudioByFriendlyUrlUrl: '/studios/getbyfriendlyurl',
    StudioSearchUrl: '/studios/search',
    UsersUrl: '/users',
    AuthenticateUserUrl: '/users/authenticate',
    AuthToken: 'ists-auth'
}

const getApiUrl = (...parts) => {
    var url = IstsApi.BaseUrl;
    for (var x = 0; x < parts.length; x++) {
        url += parts[x];
    }

    return url;
}

export default {
    BaseUrl: IstsApi.BaseUrl,
    
    // Studios
    StudiosUrl: `${getApiUrl(IstsApi.StudiosUrl)}`,
    StudioByFriendlyUrlUrl: `${getApiUrl(IstsApi.StudioByFriendlyUrlUrl)}`,
    StudioSearchUrl: `${getApiUrl(IstsApi.StudioSearchUrl)}`,

    // Users
    UsersUrl: `${getApiUrl(IstsApi.UsersUrl)}`,
    AuthenticateUrl: `${getApiUrl(IstsApi.AuthenticateUserUrl)}`,
    AuthToken: IstsApi.AuthToken
};
