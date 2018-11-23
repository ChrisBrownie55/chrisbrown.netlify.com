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

  const Tag = props.type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className="base-input" type={Tag} theme={theme}>
      <Tag id={"base-input-"+(counter)} {...props} onChange={onChange} />
      <label htmlFor={"base-input-"+counter++}>{label}</label>
    </div>
  );
};

BaseInput.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark'])
};

export default React.memo(BaseInput);
