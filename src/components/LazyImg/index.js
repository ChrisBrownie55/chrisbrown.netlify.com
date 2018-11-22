import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const targets = new Map();

const io = new IntersectionObserver(entries => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      targets.get(target).forEach(async ({ src, img }) => {
        img.setAttribute('src', (await src()).default);
      });

      requestIdleCallback(() => {
        io.unobserve(target);
        targets.delete(target);
      });
    }
  })
});

const LazyImg = ({ src, alt, target, ...props }) => {
  const imgRef = useRef();

  useEffect(() => {
    const observeTarget = target
      ? document.querySelector(target)
      : imgRef.current;

    targets.set(observeTarget, (targets.get(observeTarget) || []).concat({
      src,
      img: imgRef.current
    }));
    io.observe(observeTarget);
  }, [imgRef, src, target]);

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
  alt: PropTypes.string.isRequired,
  target: PropTypes.string
};

export default React.memo(LazyImg);
