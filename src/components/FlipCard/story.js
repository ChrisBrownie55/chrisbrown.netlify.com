import { storiesOf } from '@storybook/react';
import { WithFigma } from 'storybook-addon-figma';

import React from 'react';
import FlipCard from './';

storiesOf('FlipCard', module)
  .add('basic setup', () => (
    <WithFigma url="https://www.figma.com/file/WdlkC8qFFcfydMtPy8pK9pLD/Flip-Card">
      <FlipCard years={1} label="Test">
        <svg width="69" height="60" viewBox="0 0 69 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M42.4676 0L34.5 13.8565L26.5327 0H0L34.5 60L69 0H42.4676Z" fill="#FED766"/>
          <path d="M42.3904 0L34.4999 13.8565L26.6096 0H14L34.4999 36L55 0H42.3904Z" fill="#584B26"/>
        </svg>
      </FlipCard>
    </WithFigma>
  ));
