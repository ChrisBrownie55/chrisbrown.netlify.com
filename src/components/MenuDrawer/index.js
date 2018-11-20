import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import throttle from 'lodash.throttle';
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

  const updateColor = throttle(() => {
    const { y, height } = burgerRect;

    sectionElements.some(section => {
      const { y: sectionY, height: sectionHeight } = section.getBoundingClientRect();

      if (y >= sectionY && y + height < sectionY + sectionHeight) {
        let color = colorMap.get(section);
        if (!color) { return false; }

        if (section.classList.contains('hire') && window.innerWidth > 800) {
          color = 'black';
        }
        burgerRef.current.style.color = color;
        return true;
      }

      return false;
    })
  }, 200);

  useEffect(() => {
    burgerRect = burgerRef.current.getBoundingClientRect();
  });

  useEffect(() => {
    if (sections) {
      if (typeof sectionElements === 'string') {
        sectionElements = document.querySelector(sections)
      }

      sectionElements = Array.from(sectionElements);

      colorMap.clear();
      sectionElements.forEach(el => {
        colorMap.set(el, brightnessFromElementBackground(el) > 200 ? 'black' : 'white');
      });

      window.addEventListener('scroll', updateColor);
      return () => {
        window.removeListener('scroll', updateColor);
      }
    }
  }, [sections]);

  return (
      <nav className="menu-drawer" role="navigation" onClick={toggleOpen} open={isOpen}>
        { /**
          onClick will only be fired when a child (including <button>)
          is clicked because of `pointer-events: none;`.
        **/ }
        <button className="burger" aria-label="menu" title="menu">
          <svg ref={burgerRef} className="burger-icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path className="bar" d="M4,8h12c1,0,2,0,2,-2s-1,-2,-2,-2h-12c-1,0,-2,0,-2,2s1,2,2,2z" />
            <path className="bar" d="M0,10h4c-1,0,-2,0,-2,2s1,2,2,2h16c1,0,2,0,2,-2s-1,-2,-2,-2z" />
            <path className="bar" d="M4,20h12c1,0,2,0,2,-2s-1,-2,-2,-2h-12c-1,0,-2,0,-2,2s1,2,2,2z" />
          </svg>
        </button>
        { children }
      </nav>
  );
};

MenuDrawer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  sections: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.instanceOf(HTMLElement)),
    PropTypes.instanceOf(HTMLCollection),
    PropTypes.instanceOf(NodeList)
  ])
};

export default MenuDrawer;
