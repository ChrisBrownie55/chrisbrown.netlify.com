import React from 'react';

let counter = 0;

const BaseInput = ({ label, ...props }) => {

  return (
    <div className="base-input">
      {label ? <label htmlFor={"base-input-"+counter}>{label}</label> : null}
      <input id={"base-input-"+(counter++)} {...props} />
    </div>
  )
};

export default BaseInput;
