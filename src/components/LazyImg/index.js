import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const io = new IntersectionObserver(entries => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      io.unobserve(target);
      target.setAttribute('src', 'data-src');
      target.removeAttribute('data-src');
    }
  })
});

const LazyImg = ({ src, alt, ...props }) => {
  const imgRef = useRef();

  useEffect(() => {
    io.observe(imgRef.current);
  }, [imgRef]);

  return (
    <img
      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
      data-src={src}
      alt={alt}
      ref={imgRef}
      {...props}
    />
  );
};

LazyImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default React.memo(LazyImg);
