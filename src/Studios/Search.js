import React, { Component } from 'react';

import StudioSearchApi from './Api/StudioSearchApi';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            didSearch: false,
            searchResults: []
        };
    }
    
    render() {
        return (
            <div>
                <h2>Studio Search</h2>
                <SearchForm onSubmit={this.handleSearchSubmit.bind(this)} />
                <SearchResults didSearch={this.state.didSearch} results={this.state.searchResults} />
            </div>
        );
    }

    handleSearchSubmit(postalCode, distance) {
        const results = StudioSearchApi.search(postalCode, distance);
        this.setState({ didSearch: true, searchResults: results });
    }
}

export default Search;
