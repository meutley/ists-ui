import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Textbox.css';

class Textbox extends Component {
    render() {
        return (
            <input type="text"
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
