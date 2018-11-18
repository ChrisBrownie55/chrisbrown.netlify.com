import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const FlatButton = props => <button className="flat-button" {...props}></button>;

FlatButton.propTypes = {
  theme: PropTypes.oneOf(['dark'])
}

export default React.memo(FlatButton);
