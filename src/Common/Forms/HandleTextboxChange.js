// Returns a function, bound to the given context, which updates
// the state of the calling component. The returned function
// will be called via the onChange event fired by a text input control.
const HandleTextboxChange = function (context, fieldName) {
    return function (event) {
        this.setState({ [fieldName]: event.target.value });
    }.bind(context);
}

export default HandleTextboxChange;
