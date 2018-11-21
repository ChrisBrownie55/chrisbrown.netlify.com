import React from 'react';
import PropTypes from 'prop-types';

import { traverseDownUntil } from '../../utils.js';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const SmoothScroll = ({ target, children: element }) => {
  async function onClick() {
    const element = target instanceof HTMLElement
      ? target
      : target.current instanceof HTMLElement
        ? target.current
        : document.querySelector(target);
    if (!element) { return; }
    element.scrollIntoView({ behavior: prefersReducedMotion ? 'instant' : 'smooth' })
  }

  const elementWithListener = React.cloneElement(
    element,
    { onClick: onClick.bind(this) }
  );

  return elementWithListener;
};

SmoothScroll.propTypes = {
  target: PropTypes.oneOfType([
    PropTypes.instanceOf(HTMLElement),
    PropTypes.string,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ]).isRequired,
  children: PropTypes.element.isRequired
};

export default SmoothScroll;
