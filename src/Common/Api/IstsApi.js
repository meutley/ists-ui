const IstsApi = {
    BaseUrl: 'http://localhost:5000/api',
    StudiosUrl: '/studios',
    StudioSearchUrl: '/studios/search',
    UsersUrl: '/users'
}

export default {
    BaseUrl: IstsApi.BaseUrl,
    StudiosUrl: IstsApi.BaseUrl + IstsApi.StudiosUrl,
    StudioSearchUrl: IstsApi.BaseUrl + IstsApi.StudioSearchUrl,
    UsersUrl: IstsApi.BaseUrl + IstsApi.UsersUrl
};
