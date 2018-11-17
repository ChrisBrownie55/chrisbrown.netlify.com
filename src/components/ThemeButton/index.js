import React from 'react';
import './index.css';

const ThemeButton = props => <button className="theme-button" {...props}></button>;

export default React.memo(ThemeButton);
