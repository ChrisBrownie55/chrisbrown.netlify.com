import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const targets = new Map();

const io = new IntersectionObserver(entries => {
  entries.forEach(async ({ isIntersecting, target }) => {
    if (isIntersecting) {
      const src = await targets.get(target)();
      target.setAttribute('src', src.default);

      requestIdleCallback(() => {
        io.unobserve(target);
        targets.delete(target);
      });
    }
  })
});

const LazyImg = ({ src, alt, ...props }) => {
  const imgRef = useRef();

  useEffect(() => {
    targets.set(imgRef.current, src);
    io.observe(imgRef.current);
  }, [imgRef, src]);

  return (
    <img
      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
      alt={alt}
      ref={imgRef}
      {...props}
    />
  );
};

LazyImg.propTypes = {
  src: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired
};

export default React.memo(LazyImg);
