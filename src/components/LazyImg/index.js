import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const targets = new Map();

let io;
if (window.IntersectionObserver) {
  io = new IntersectionObserver(entries => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) {
        targets.get(target).forEach(async ({ src, setSrc }) => {
          setSrc((await src()).default);
        });
  
        requestIdleCallback(() => {
          io.unobserve(target);
          targets.delete(target);
        });
      }
    })
  });
}

const LazyImg = ({ src, alt, target, ...props }) => {
  const [currentSrc, setSrc] = useState('data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=');
  const imgRef = useRef();

  useEffect(() => {
    if (window.IntersectionObserver) {
      const observeTarget = target
        ? document.querySelector(target)
        : imgRef.current;

      targets.set(observeTarget, (targets.get(observeTarget) || []).concat({
        src,
        setSrc
      }));
      io.observe(observeTarget);

      return () => io.unobserve(observeTarget);
    } else {
      src().then(module => setSrc(module.default));
    }
  }, [src, target]);

  return (
    <img
      src={currentSrc}
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
