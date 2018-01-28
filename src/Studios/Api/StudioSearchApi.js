const SearchResults = [
    {
        id: 1,
        name: 'Local Studio',
        friendlyUrl: 'localstudio123',
        distance: 5.5
    },
    {
        id: 2,
        name: 'Best Studio',
        friendlyUrl: 'beststudio',
        distance: 18.25
    },
    {
        id: 3,
        name: 'Random Guy\'s Studio',
        friendlyUrl: 'randomguysstudio',
        distance: 20.0
    },
    {
        id: 4,
        name: 'Remote Studio',
        friendlyUrl: 'remotestudio',
        distance: 26.7
    },
    {
        id: 5,
        name: 'Farthest Studio',
        friendlyUrl: 'fartheststudio',
        distance: 65.0
    },
]

class StudioSearchApi {
    static search(postalCode, distance) {
        const d = parseInt(distance);
        return SearchResults.filter((result) => {
            return result.distance <= d;
        });
    }
}

export default StudioSearchApi;
