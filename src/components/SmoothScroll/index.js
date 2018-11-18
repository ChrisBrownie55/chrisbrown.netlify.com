import React from 'react';
import PropTypes from 'prop-types';

import ScrollModule from 'smooth-scroll-module/src/scroll-module';
import { traverseDownUntil } from '../../utils.js';

const scroller = new ScrollModule();
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const SmoothScroll = ({ target, children: element }) => {
  async function onClick() {
    const element = document.querySelector(target);
    if (!element) { return; }

    await scroller.scrollTo(element, prefersReducedMotion);

    const focusableElement = traverseDownUntil(node => {
      if (node.disabled) {
        return false;
      }

      const tabIndex = parseInt(node.getAttribute('tabindex'));
      if (tabIndex < 0) {
        return false;
      } else if (!isNaN(tabIndex)) {
        return true;
      }

      switch (node.tagName) {
        case 'INPUT':
        case 'BUTTON':
        case 'IFRAME':
          return true;
        case 'A':
        case 'AREA':
          return !!node.getAttribute('href');
        default:
          return false;
      }
    }, element);

    if (focusableElement) {
      focusableElement.focus();
    } else {
      console.warn('Could not find a focusable element, found this instead:', focusableElement);
    }
  }

  const elementWithListener = React.cloneElement(
    element,
    { onClick: onClick.bind(this) }
  )

  return elementWithListener;
};

SmoothScroll.propTypes = {
  target: PropTypes.oneOfType([
    PropTypes.instanceOf(HTMLElement),
    PropTypes.string
  ]).isRequired,
  children: PropTypes.element.isRequired
};

export default SmoothScroll;
