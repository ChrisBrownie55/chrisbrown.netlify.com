import React from 'react';
import PropTypes from 'prop-types';

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
    <div>
      <figure class="content" role="switch"
        tabindex="0"
        onClick={this.toggle}
        onKeyup={this._handleKeyUp}
        onKeydown={this._handleKeyDown}
        flipped={this.flipped}
        aria-checked={!!this.flipped}>
        {props.children}
        <figcaption className="content-back">
          <p>
            <span className="years">
              ${this.years}
            </span>
            <sup>yrs</sup>
          </p>
        </figcaption>
      </figure>
      <p className="name">
        ${this.name}
      </p>
    </div>
  );
};

FlipCard.propTypes = {
  years: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};

export default FlipCard;
