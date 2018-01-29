import React, { Component } from 'react';

import * as Forms from '../Common/Forms';
import * as Meui from '../Meui';

class SearchForm extends Component {
    constructor() {
        super();

        this.state = {
            postalCode: '',
            distance: '50'
        };
    }
    
    render() {
        return (
            <fieldset>
                <legend>Find a Studio</legend>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Meui.Textbox value={this.state.postalCode} placeholder="Postal Code" onChange={Forms.HandleTextboxChange(this, 'postalCode')} />
                    <br/>
                    <Meui.Textbox value={this.state.distance} placeholder="Distance" onChange={Forms.HandleTextboxChange(this, 'distance')} />
                    <br/>
                    <Meui.Button value="Search" type={Meui.ButtonType.Submit} />
                </form>
            </fieldset>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.onSubmit && typeof this.props.onSubmit === 'function') {
            this.props.onSubmit(this.state.postalCode, this.state.distance);
        }
    }
}

export default SearchForm;
