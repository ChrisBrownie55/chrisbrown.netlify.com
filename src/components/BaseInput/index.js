import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

let counter = 0;

const BaseInput = ({ label, theme, ...props }) => {
  const onChange = event => {
    if (event.target.value) {
      event.target.classList.add('notempty');
    } else {
      event.target.classList.remove('notempty');
    }

    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <div className="base-input" theme={theme}>
      <input id={"base-input-"+(counter)} {...props} onChange={onChange} />
      <label htmlFor={"base-input-"+counter++}>{label}</label>
    </div>
  );
};

BaseInput.propTypes = {
  label: PropTypes.string.isRequired
};

export default BaseInput;
