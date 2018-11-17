import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const SocialMediaLink = props => <a className="social-media-link" {...props}></a>;

SocialMediaLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default React.memo(SocialMediaLink);
