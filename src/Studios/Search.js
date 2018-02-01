import React, { Component } from 'react';

import AuthenticationService from '../Services/Authentication/AuthenticationService';
import { StudioSearchApi } from './Api';

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

    componentDidMount() {
        AuthenticationService.redirectIfNotLoggedIn(this);
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
        StudioSearchApi.search(this, postalCode, distance)
            .then((res) => {
                if (res && !res.validationErrorMessage) {
                    this.setState({ didSearch: true, searchResults: res })
                }
            });
    }
}

export default Search;
