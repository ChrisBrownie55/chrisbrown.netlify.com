import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ScrollModule from 'smooth-scroll-module/src/scroll-module'

const SmoothScroll = props => {
  useEffect(() => {
    props.children.forEach(child => {
    })
  }, [props.children])
  return props.children
}



export default SmoothScroll
