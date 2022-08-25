import React from "react";
import PropTypes from "prop-types";
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
Welcome.propTypes = {
    name : PropTypes.string.isRequired,
}
export default Welcome;

