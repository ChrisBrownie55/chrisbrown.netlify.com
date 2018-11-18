import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ScrollModule from 'smooth-scroll-module/src/scroll-module';

const SmoothScroll = props => {
  useEffect(() => {
  }, [props.children]);
  return props.children;
};

SmoothScroll.propTypes = {
  target: PropTypes.oneOfType([
    PropTypes.instanceOf(HTMLElement),
    PropTypes.string
  ]).isRequired,
  children: PropTypes.element.isRequired
};

export default SmoothScroll;
