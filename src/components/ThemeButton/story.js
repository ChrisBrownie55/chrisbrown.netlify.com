import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import React from 'react';
import ThemeButton from './';
import ThemeContext from '../../contexts/theme.js';

storiesOf('ThemeButon', module)
  .addDecorator(centered)
  .addWithJSX('basic setup', () => (
    <ThemeButton>Lorem Ipsum</ThemeButton>
  ))
  .addWithJSX('with dark theme', () => (

  ))
  .addWithJSX('with theme color', () => (
    <ThemeButton style={{"--theme-primary": "red"}}>Lorem Ipsum</ThemeButton>
  ))
