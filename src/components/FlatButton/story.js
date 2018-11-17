import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React, { useContext } from 'react';
import FlatButton from './';
import ThemeContext from '../../contexts/theme.js';

storiesOf('FlatButton', module)
  .add('basic setup', () => (
    <FlatButton onClick={action('clicked')}>Lorem Ip Sum</FlatButton>
  ))
  .add('with dark theme', () => (
    <ThemeContext.Provider value="dark">
      <div style={{backgroundColor: "#222", padding: "2rem"}}>
        <ThemedFlatButton></ThemedFlatButton>
      </div>
    </ThemeContext.Provider>
  ))
  .add('with round attribute', () => (
    <FlatButton round="">Lorem Ip Sum</FlatButton>
  ), {
    notes: 'Here '
  });

function ThemedFlatButton() {
  const theme = useContext(ThemeContext);
  return (
    <FlatButton theme={theme}>Lorem Ip Sum</FlatButton>
  );
}
