import React from 'react';
import PropTypes from 'prop-types';

import { join } from '../../utils';

import './index.css';

const ImgCard = ({ src, alt, children, className, ...props}) => {
  return (
    <div className={join("ImgCard", className)} {...props}>
      <img className="ImgCard-image" src={src} alt={alt} />
      <div className="ImgCard-content">
        <p className="ImgCard-description">
          {children}
        </p>
        <a className="ImgCard-explore-link" href=${this.href}>Explore</a>
      </div>
    </div>
  );
}

ImgCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default React.memo(ImgCard);
