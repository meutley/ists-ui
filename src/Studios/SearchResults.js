import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchResults extends Component {
    render() {
        if (this.props.didSearch === true) {
            return (
                <div className="studio-search-results">
                    Found {this.props.results.length} result(s)
                    <ul>
                        {this.props.results.map((r) => {
                            return <li key={r.friendlyUrl}><Link to={'/studios/' + r.friendlyUrl}>{r.name}</Link></li>
                        })}
                    </ul>
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
