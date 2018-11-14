import React from 'react';
import PropTypes from 'prop-types';

let counter = 0;

const BaseInput = ({ label, ...props }) => (
  <div className="base-input">
    {label ? <label htmlFor={"base-input-"+counter}>{label}</label> : null}
    <input id={"base-input-"+(counter++)} {...props} />
  </div>
);

BaseInput.propTypes = {
  label: PropTypes.string.isRequired
}

export default BaseInput;
