import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import SmoothScroll from './';

storiesOf('SmoothScroll', module)
  .add('basic setup', () => {
    requestIdleCallback(() => {
      document.getElementById('root').children[0].style.position = '';
    });

    return (
      <div>
        <SmoothScroll target="#the-target">
          <button>CLICK TO SCROLL</button>
        </SmoothScroll>
        <div id="the-target" tabIndex="0" style={{marginTop: "calc(100vh + 4rem)"}}>
          <h1>I should have been smoothly scrolled into view!</h1>
        </div>
      </div>
    );
  });
