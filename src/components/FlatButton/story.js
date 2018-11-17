import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

import React, { useContext } from 'react';
import FlatButton from './';
import ThemeContext from '../../contexts/theme.js';

storiesOf('FlatButton', module)
  .addDecorator(centered)
  .addWithJSX('basic setup', () => (
    <FlatButton onClick={action('clicked')}>Lorem Ip Sum</FlatButton>
  ))
  .addWithJSX('with dark theme', () => (
    <ThemeContext.Provider value="dark">
      <div style={{backgroundColor: "#222", padding: "2rem"}}>
        <ThemedFlatButton></ThemedFlatButton>
      </div>
    </ThemeContext.Provider>
  ))
  .addWithJSX('with round attribute', () => (
    <FlatButton round="">Lorem Ip Sum</FlatButton>
  ));

function ThemedFlatButton() {
  const theme = useContext(ThemeContext);
  return (
    <FlatButton theme={theme}>Lorem Ip Sum</FlatButton>
  );
}
