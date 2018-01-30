const IstsApi = {
    BaseUrl: 'http://localhost:5000/api',
    StudiosUrl: '/studios',
    StudioSearchUrl: '/studios/search',
    UsersUrl: '/users',
    AuthenticateUrl: '/authenticate',
    AuthToken: 'ists-auth'
}

export default {
    BaseUrl: IstsApi.BaseUrl,
    StudiosUrl: `${IstsApi.BaseUrl}${IstsApi.StudiosUrl}`,
    StudioSearchUrl: `${IstsApi.BaseUrl}${IstsApi.StudioSearchUrl}`,
    UsersUrl: `${IstsApi.BaseUrl}${IstsApi.UsersUrl}`,
    AuthenticateUrl: `${IstsApi.BaseUrl}${IstsApi.UsersUrl}${IstsApi.AuthenticateUrl}`,
    AuthToken: IstsApi.AuthToken
};
