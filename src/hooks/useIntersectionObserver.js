import React, { useState } from 'react';
import Observer from '@researchgate/react-intersection-observer';

const useIntersectionObserver = (threshold, Placeholder) => {
  const [isIntersecting, setIntersecting] = useState(false);

  function handleChange({ isIntersecting, intersectionRatio }) {
    setIntersecting(isIntersecting && intersectionRatio <= threshold);
  }

  return props => {
    return (
      <Observer onChange={handleChange} threshold={threshold}>
        {isIntersecting ? props.children : <Placeholder />}
      </Observer>
    );
  };
};

export default useIntersectionObserver;
