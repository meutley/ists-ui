import React, { Component } from 'react';

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
                    <Meui.Textbox value={this.state.postalCode} name="postalCode" placeholder="Postal Code" onChange={this.handleChange.bind(this)} />
                    <br/>
                    <Meui.Textbox value={this.state.distance} name="distance" placeholder="Distance" onChange={this.handleChange.bind(this)} />
                    <br/>
                    <Meui.Button value="Search" type={Meui.ButtonType.Submit} />
                </form>
            </fieldset>
        );
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.onSubmit && typeof this.props.onSubmit === 'function') {
            this.props.onSubmit(this.state.postalCode, this.state.distance);
        }
    }
}

export default SearchForm;
