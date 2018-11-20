import React from 'react';
import PropTypes from 'prop-types';

const FlipCard = ({ years, label }) => {
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
    
  );
};

FlipCard.propTypes = {
  years: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};

export default FlipCard;
