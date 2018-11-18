import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';

import React, { useContext } from 'react';
import ThemeButton from './';

storiesOf('ThemeButton', module)
  .add('basic setup', () => (
    <ThemeButton onClick={action('clicked')}>Lorem Ipsum Dolor Sit</ThemeButton>
  ))
  .add('with dark theme', () => (
    <div style={{backgroundColor: "#222", padding: "2rem"}}>
      <ThemeButton theme="dark">Lorem Ipsum Dolor Sit</ThemeButton>
    </div>
  ))
  .add('with theme color', () => (
    <WithFigma url='https://www.figma.com/file/UYOrWiOvCbpVseyanA2bh9XZ/Theme-Button'>
      <div style={{backgroundColor: "#222", padding: "2rem"}}>
        <ThemeButton style={{"--theme-primary": "#fed766"}} theme="dark">Lorem Ipsum Dolor Sit</ThemeButton>
      </div>
    </WithFigma>
  ));
