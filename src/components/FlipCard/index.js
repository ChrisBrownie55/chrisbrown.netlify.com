import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { join } from '../../utils';

import './index.css';

const FlipCard = ({ years, label, className, children, ...props }) => {
  const { 0: isFlipped, 1: setFlipped } = useState(false);
  function toggleFlipped() {
    setFlipped(!isFlipped);
  }

  function handleKeyUp(event) {
    // if key is a space
    if (event.key === ' ') {
      toggleFlipped();
    }
  }
  function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  return (
    <div {...props} className={join('FlipCard', className)}>
      <div className="FlipCard-content--wrapper">
        <figure
          className="FlipCard-content"
          tabIndex="0"
          onClick={toggleFlipped}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          flipped={isFlipped ? '' : undefined}
        >
          {children}
          <figcaption className="FlipCard-content-back">
            <p>
              <span className="FlipCard-years">{years}</span>
              <sup>yrs</sup>
            </p>
          </figcaption>
        </figure>
      </div>
      <p className="FlipCard-name">{label}</p>
    </div>
  );
};

FlipCard.propTypes = {
  years: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};

export default React.memo(FlipCard);
