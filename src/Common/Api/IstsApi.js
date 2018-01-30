const IstsApi = {
    BaseUrl: 'http://localhost:5000/api',
    StudiosUrl: '/studios',
    StudioByFriendlyUrlUrl: '/studios/getbyfriendlyurl',
    StudioSearchUrl: '/studios/search',
    UsersUrl: '/users',
    AuthenticateUserUrl: '/users/authenticate',
    AuthToken: 'ists-auth'
}

export default {
    BaseUrl: IstsApi.BaseUrl,
    
    // Studios
    StudiosUrl: `${IstsApi.BaseUrl}${IstsApi.StudiosUrl}`,
    StudioByFriendlyUrlUrl: `${IstsApi.BaseUrl}${IstsApi.StudioByFriendlyUrlUrl}`,
    StudioSearchUrl: `${IstsApi.BaseUrl}${IstsApi.StudioSearchUrl}`,

    // Users
    UsersUrl: `${IstsApi.BaseUrl}${IstsApi.UsersUrl}`,
    AuthenticateUrl: `${IstsApi.BaseUrl}${IstsApi.AuthenticateUserUrl}`,
    AuthToken: IstsApi.AuthToken
};
