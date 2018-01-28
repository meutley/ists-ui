import React, { Component } from 'react';

class SearchResults extends Component {
    render() {
        if (this.props.didSearch === true) {
            return (
                <div className="studio-search-results">
                    Found {this.props.results.length} result(s)
                </div>
            );
        } else {
            return (
                <div className="studio-search-results"></div>
            );
        }
    }
}

export default SearchResults;
