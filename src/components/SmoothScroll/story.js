import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import SmoothScroll from './';

storiesOf('SmoothScroll', module)
  .add('basic setup', () => (
    <div>
      <SmoothScroll target="#the-target">
        <button>CLICK TO SCROLL</button>
      </SmoothScroll>
      <div id="the-target" style={{marginTop: "calc(100vh + 4rem)"}}>
        <h1>I should have been smoothly scrolled into view!</h1>
      </div>
    </div>
  ));
