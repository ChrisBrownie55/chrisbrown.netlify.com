import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import throttle from 'lodash.throttle';
import { brightnessFromElementBackground } from '../../utils.js';

import './index.css';

const MenuDrawer = ({ children, sections }) => {
  // Variables setup
  const menuDrawerRef = useRef();
  const burgerRef = useRef();
  let burgerRect = {
    y: 0,
    height: 0
  };

  const colorMap = new Map();

  const [isOpen, setOpen] = useState(false);
  function toggleOpen(event) {
    /* Do nothing if only the menu itself was clicked */
    if (event.target === menuDrawerRef.current) {
      return;
    }

    document.body.style.overflow = isOpen ? '' : 'hidden';
    setOpen(!isOpen);
  }

  // changes color of burger menu icon to contrast background
  const updateColor = throttle(() => {
    const { y, height } = burgerRect;
    sections.some(({ current: section }) => {
      if (!section) {
        return false;
      }
      const { y: sectionY, height: sectionHeight } = section.getBoundingClientRect();

      if (y >= sectionY && y + height < sectionY + sectionHeight) {
        let color = colorMap.get(section);
        if (!color) {
          color = brightnessFromElementBackground(section) > 200 ? 'black' : 'white';
          if (section.classList.contains('hire') && window.innerWidth > 800) {
            color = 'black';
          }
          colorMap.set(section, color);
        }

        burgerRef.current.style.color = color;
        return true;
      }

      return false;
    });
  }, 200);

  // get position and height of menu burger
  useEffect(() => {
    if (burgerRef.current) {
      burgerRect = burgerRef.current.getBoundingClientRect();
    }
  }, [burgerRef]);

  // Setup sectionElements array and colors
  useEffect(() => {
    if (sections) {
      colorMap.clear();
      window.addEventListener('scroll', updateColor);

      // cleanup
      return () => {
        window.removeEventListener('scroll', updateColor);
      };
    }
  }, sections);

  return (
    <nav
      className="menu-drawer"
      role="navigation"
      onClick={toggleOpen}
      open={isOpen}
      ref={menuDrawerRef}
    >
      {/**
          onClick will only be fired when a child (including <button>)
          is clicked because of `pointer-events: none;`.
        **/}
      <button className="burger" aria-label="menu" title="menu">
        <svg
          ref={burgerRef}
          className="burger-icon"
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path className="bar" d="M4,8h12c1,0,2,0,2,-2s-1,-2,-2,-2h-12c-1,0,-2,0,-2,2s1,2,2,2z" />
          <path className="bar" d="M0,10h4c-1,0,-2,0,-2,2s1,2,2,2h16c1,0,2,0,2,-2s-1,-2,-2,-2z" />
          <path className="bar" d="M4,20h12c1,0,2,0,2,-2s-1,-2,-2,-2h-12c-1,0,-2,0,-2,2s1,2,2,2z" />
        </svg>
      </button>
      {children}
    </nav>
  );
};

MenuDrawer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
  sections: PropTypes.any.isRequired
};

export default MenuDrawer;
