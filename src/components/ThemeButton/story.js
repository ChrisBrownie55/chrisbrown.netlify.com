import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import React, { useContext } from 'react';
import ThemeButton from './';
import ThemeContext from '../../contexts/theme.js';

storiesOf('ThemeButon', module)
  .addDecorator(centered)
  .addWithJSX('basic setup', () => (
    <ThemeButton>Lorem Ipsum</ThemeButton>
  ))
  .addWithJSX('with dark theme', () => (
    <ThemeContext.Provider value="dark">
      <div style={{backgroundColor: "#222", padding: "2rem"}}>
        <ThemedThemeButton>
        </ThemedThemeButton>
      </div>
    </ThemeContext.Provider>
  ), {
    onBeforeRender(domString) {
      const functionString = `
function ThemedThemeButton() {
  const theme = useContext(ThemeContext);
  return (
    <ThemeButton theme={theme}>Lorem Ipsum</ThemeButton>
  );
}

`;

      return functionString + domString.replace(/\[object Object\]/g, 'ThemeContext.Provider');
    }
  })
  .addWithJSX('with theme color', () => (
    <div style={{backgroundColor: "#222", padding: "2rem"}}>
      <ThemeButton style={{"--theme-primary": "#fed766"}} theme="dark">Lorem Ipsum</ThemeButton>
    </div>
  ));


function ThemedThemeButton() {
  const theme = useContext(ThemeContext);
  return (
    <ThemeButton theme={theme}>Lorem Ipsum</ThemeButton>
  );
}
