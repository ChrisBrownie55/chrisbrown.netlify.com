import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

import React, { useContext } from 'react';
import ThemeButton from './';

storiesOf('ThemeButon', module)
  .addDecorator(centered)
  .add('basic setup', () => (
    <ThemeButton onClick={action('clicked')}>Lorem Ipsum Dolor Sit</ThemeButton>
  ))
  .add('with dark theme', () => (
    <div style={{backgroundColor: "#222", padding: "2rem"}}>
      <ThemeButton theme="dark">Lorem Ipsum Dolor Sit</ThemeButton>
    </div>
  ))
  .add('with theme color', () => (
    <div style={{backgroundColor: "#222", padding: "2rem"}}>
      <ThemeButton style={{"--theme-primary": "#fed766"}} theme="dark">Lorem Ipsum Dolor Sit</ThemeButton>
    </div>
  ));
