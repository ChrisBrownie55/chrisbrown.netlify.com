import React from 'react';
import './index.css';

const FlatButton = props => <button className="flat-button" {...props}></button>;

export default React.memo(FlatButton);
