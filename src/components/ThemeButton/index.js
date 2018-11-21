import React from 'react';
import PropTypes from 'prop-types';

import { join } from '../../utils';

import './index.css';

const ThemeButton = ({ className, ...props }) => (
  <button {...props} className={join("theme-button",className)}></button>
);

ThemeButton.propTypes = {
  theme: PropTypes.oneOf(['dark'])
};

export default React.memo(ThemeButton);
