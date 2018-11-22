import React from 'react';
import PropTypes from 'prop-types';

const observer = new IntersectionObserver(entries => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      observer.unobserve(target);
      target.setAttribute('src', 'data-src');
      target.removeAttribute('data-src');
    }
  })
});

const LazyImg = ({ src, alt, ...props }) => {
  return (
    <img
      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
      data-src={src}
      alt={alt}
      {...props}
    />
  );
};

LazyImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default React.memo(LazyImg);
