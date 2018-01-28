import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export class ButtonType {
    constructor(name) {
        this.name = name;
    }

    static Button = new ButtonType('button');
    static Submit = new ButtonType('submit');
}

class Button extends Component {
    render() {
        const buttonType = (this.props.type && this.props.type instanceof ButtonType)
            ? (this.props.type || ButtonType.Button)
            : ButtonType.Button;

        return (
            <input type={buttonType.name}
                   className="meui-button"
                   value={this.props.value}
                   onChange={this.handleClick.bind(this)} />
        );
    }

    handleClick(event) {
        if (this.props.onClick && typeof this.props.onClick === 'function') {
            this.props.onClick(event);
        }
    }
}

Button.propTypes = {
    value: PropTypes.string
};

export default Button;
