import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Textbox.css';

export class TextboxType {
    constructor(name) {
        this.name = name;
    }

    static PlainText = new TextboxType('text');
    static Password = new TextboxType('password');
}

const DefaultTextboxType = TextboxType.PlainText;

class Textbox extends Component {
    render() {
        const textboxType = (this.props.type && this.props.type instanceof TextboxType)
            ? this.props.type
            : DefaultTextboxType;
        
        return (
            <input type={textboxType.name}
                   className="meui-textbox"
                   name={this.props.name}
                   value={this.props.value}
                   placeholder={this.props.placeholder}
                   onChange={this.handleChange.bind(this)} />
        );
    }

    handleChange(event) {
        if (this.props.onChange && typeof this.props.onChange === 'function') {
            this.props.onChange(event);
        }
    }
}

Textbox.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string
};

export default Textbox;
