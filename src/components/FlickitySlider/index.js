import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { join } from '../../utils';

import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

const defaultOptions = {
  prevNextButtons: true,
  pageDots: true,
  autoPlay: 5000,
  parallax: null,
  wrapAround: true,
  arrowShape: `
    M 50 0A 1 1 0 0 1 50 100A 1 1 0 0 1 50 0ZM51.13,23.39C53.30,25.55,53.30,29.05,51.14,31.22C48.50,33.87,44.47,37.89,41.83,40.54C40.38,41.99,41.41,44.46,43.45,44.46C51.43,44.46,69.81,44.46,77.79,44.46C80.85,44.46,83.33,46.94,83.33,50.00C83.33,51.11,83.33,48.89,83.33,50.00C83.33,53.06,80.85,55.54,77.79,55.54C69.81,55.54,51.43,55.54,43.46,55.54C41.41,55.54,40.39,58.02,41.83,59.46C44.48,62.11,48.50,66.12,51.15,68.77C53.31,70.93,53.31,74.44,51.14,76.59C50.34,77.39,51.88,75.86,51.08,76.65C48.91,78.81,45.40,78.80,43.24,76.63C37.92,71.31,25.90,59.25,20.58,53.92C18.42,51.75,18.42,48.25,20.58,46.08C25.90,40.75,37.92,28.69,43.24,23.36C45.40,21.19,48.91,21.19,51.08,23.34C51.88,24.13,50.33,22.60,51.13,23.39Z
  `
};
const FlickitySlider = ({ options=defaultOptions, is='div', className, ...props }) => {
  const Tag = is;
  const tagRef = useRef();

  useEffect(() => {
    const flickity = new Flickity(tagRef.current, options);
    setTimeout(() => {
      flickity.resize()
    });
    return () => {
      flickity.destroy();
    }
  });

  return (
    <Tag ref={tagRef} className={join("FlickitySlider", className)} {...props}>
    </Tag>
  );
};

FlickitySlider.propTypes = {
  options: PropTypes.object,
  is: PropTypes.string
}

export default FlickitySlider;
