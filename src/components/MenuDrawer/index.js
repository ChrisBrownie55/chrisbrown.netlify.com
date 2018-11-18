import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { throttle } from 'lodash';
import { brightnessFromElementBackground } from '../../utils.js';

import './index.css';

const MenuDrawer = ({ children, sections }) => {
  const burgerRef = useRef();
  let burgerRect;

  let sectionElements = sections;
  const colorMap = new Map();

  const { 0: isOpen, 1: setOpen } = useState(false);
  function toggleOpen() {
    setOpen(!isOpen);
  }

  const scrollListener = throttle(() => {

  }, 200);

  useEffect(() => {
    burgerRect = burgerRef.current.getBoundingClientRect();
  });

  useEffect(() => {
    if (!Array.isArray(sectionElements)) {
      sectionElements = document.querySelector(sections)
    }

    colorMap.clear();
    sectionElements.forEach(el => {
      colorMap.set(el, brightnessFromElementBackground(el) > 200 ? 'black' : 'white');
    });
  }, [sections]);

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeListener('scroll', scrollListener);
    }
  })

  return (
    <React.Fragment>
      <button className="burger" aria-label="menu" onClick={toggleOpen}>
        <svg ref={burgerRef} className="burger-icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path className="bar" d="M4,8h12c1,0,2,0,2,-2s-1,-2,-2,-2h-12c-1,0,-2,0,-2,2s1,2,2,2z" />
          <path className="bar" d="M0,10h4c-1,0,-2,0,-2,2s1,2,2,2h16c1,0,2,0,2,-2s-1,-2,-2,-2z" />
          <path className="bar" d="M4,20h12c1,0,2,0,2,-2s-1,-2,-2,-2h-12c-1,0,-2,0,-2,2s1,2,2,2z" />
        </svg>
      </button>

      { /** onClick will only be fired when a child is clicked because of `pointer-events: none;` **/ }
      <section className="menu" onClick={toggleOpen}>
        { children }
      </section>
    </React.Fragment>
  );
};

MenuDrawer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  sections: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.instanceOf(HTMLElement))
  ])
};

export default MenuDrawer;
