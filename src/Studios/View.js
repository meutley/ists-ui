import React, { Component } from 'react';

class View extends Component {
    render() {
        return (
            <h2>{this.props.studio.name}</h2>
        );
    }
}

export default View;
