import React, { Component } from 'react';

import { StudioApi } from './Api';

import View from './View';

class ViewContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            didLoad: false,
            studio: null
        };
    }
    
    componentDidMount() {
        this.loadStudio();
    }
    
    render() {
        const didLoad = this.state.didLoad;
        const studioDefined = this.state.studio !== null && this.state.studio !== undefined;
        
        var renderResult;
        if (didLoad) {
            renderResult = studioDefined
                ? <View studio={this.state.studio} />
                : <h2>Not found</h2>;
        } else {
            renderResult = <h2>Loading</h2>;
        }
        
        return renderResult;
    }

    loadStudio() {
        const { match: { params } } = this.props;
        const studio = StudioApi.getByFriendlyUrl(params.friendlyUrl);
        this.setState({
            didLoad: true,
            studio: studio
        });
    }
}

export default ViewContainer;
