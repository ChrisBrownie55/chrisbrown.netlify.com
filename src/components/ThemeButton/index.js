import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const ThemeButton = props => <button className="theme-button" {...props}></button>;

ThemeButton.propTypes = {
  theme: PropTypes.oneOf(['dark'])
};

export default React.memo(ThemeButton);
