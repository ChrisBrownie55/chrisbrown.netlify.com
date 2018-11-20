import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Flickity from 'flickity';

const FlickitySlider = ({ options, tag='div', ...props }) => {
  const tagRef = useRef();

  useEffect(() => {
    new Flickity(tagRef, options);
  });

  return (
    <tag ref={tagRef}>
      {props.children}
    </tag>
  );
};

FlickitySlider.propTypes = {
  options: PropTypes.object,
  tag: PropTypes.string
}

export default FlickitySlider;
