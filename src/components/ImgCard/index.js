import React from 'react';
import PropTypes from 'prop-types';

import LazyImg from '../LazyImg';
import { join } from '../../utils';

import './index.css';

const ImgCard = ({ src, alt, href, children, className, ...props}) => {
  return (
    <div className={join("ImgCard", className)} {...props}>
      <LazyImg target=".mywork" className="ImgCard-image" src={src} alt={alt} />
      <div className="ImgCard-content">
        <div className="ImgCard-description">
          {children}
        </div>
        <a className="ImgCard-explore-link" href={href}>Explore</a>
      </div>
    </div>
  );
}

ImgCard.propTypes = {
  src: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default React.memo(ImgCard);
