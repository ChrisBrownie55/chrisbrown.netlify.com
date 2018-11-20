import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const FlipCard = ({ years, label, ...props }) => {
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
    <div className="FlipCard">
      <figure className="FlipCard-content"
        role="switch"
        tabIndex="0"
        onClick={toggleFlipped}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        flipped={isFlipped ? "" : undefined}
        aria-checked={isFlipped}>
        {props.children}
        <figcaption className="FlipCard-content-back">
          <p>
            <span className="FlipCard-years">
              {years}
            </span>
            <sup>yrs</sup>
          </p>
        </figcaption>
      </figure>
      <p className="FlipCard-name">
        {label}
      </p>
    </div>
  );
};

FlipCard.propTypes = {
  years: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};

export default FlipCard;
