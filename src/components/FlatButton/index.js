import React from 'react';
import PropTypes from 'prop-types';

import { join } from '../../utils';

import './index.css';

const FlatButton = ({ className, ...props }) => (
  <button {...props} className={join("flat-button", className)}></button>
);

FlatButton.propTypes = {
  theme: PropTypes.oneOf(['dark'])
};

export default React.memo(FlatButton);
