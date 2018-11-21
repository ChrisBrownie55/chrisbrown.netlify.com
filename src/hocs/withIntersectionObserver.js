import React, { useState } from 'react';
import Observer from '@researchgate/react-intersection-observer';

export default threshold => BaseComponent => {
  const WithIntersectionObserver = props => {
    const { 0: isIntersecting, 1: setIntersecting } = useState(false);

    function handleChange({ isIntersecting, intersectionRatio }) {
      setIntersecting(isIntersecting && intersectionRatio <= threshold);
    }

    return (
      <Observer onChange={handleChange} threshold={threshold}>
        <BaseComponent {...props} isVisble={isIntersecting}></BaseComponent>
      </Observer>
    );
  };

  const displayName = BaseComponent.displayName || BaseComponent.name || 'Component';
  WithIntersectionObserver.displayName = `withIntersectionObserver(${displayName})`;

  return WithIntersectionObserver;
};
