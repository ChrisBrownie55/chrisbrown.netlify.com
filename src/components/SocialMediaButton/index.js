import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const SocialMediaButton = props => <a {...props}></a>

SocialMediaButton.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default SocialMediaButton
