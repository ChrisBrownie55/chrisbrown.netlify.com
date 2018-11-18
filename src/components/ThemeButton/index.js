import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const ThemeButton = props => <button className="theme-button" {...props}></button>;

ThemeButton.propTypes = {
  theme: PropTypes.string
}

export default React.memo(ThemeButton);
