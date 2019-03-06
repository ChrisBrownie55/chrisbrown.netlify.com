import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const SocialMediaLink = ({ children, ...props }) => <a className="social-media-link" {...props}>{children}</a>;

SocialMediaLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark'])
};

export default React.memo(SocialMediaLink);
