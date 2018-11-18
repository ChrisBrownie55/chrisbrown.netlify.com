import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React, { useRef } from 'react';
import SmoothScroll from './';

const setup = () => requestIdleCallback(() => {
  document.getElementById('root').children[0].style.position = '';
});
const ScrollTarget = ({ _ref=null }) => (
  <div ref={_ref} id="the-target" tabIndex="0" style={{marginTop: "calc(100vh + 4rem)"}}>
    <h1>I should have been smoothly scrolled into view!</h1>
  </div>
);

storiesOf('SmoothScroll', module)
  .add('basic setup', () => {
    setup();

    return (
      <div>
        <SmoothScroll target="#the-target">
          <button>CLICK TO SCROLL</button>
        </SmoothScroll>
        <ScrollTarget></ScrollTarget>
      </div>
    );
  }, {
    notes: '<b>SmoothScroll</b> must take a <code>target</code> attribute (as a string, or HTMLElement) and exactly one <code>children</code> element.'
  })
  .add('with HTMLElement target', () => {
    setup();

    return (
      <ScrollWithElementTarget></ScrollWithElementTarget>
    );
  });

  function ScrollWithElementTarget() {
    const scrollTargetRef = useRef("");

    return (
      <div>
        <SmoothScroll target={scrollTargetRef.current}>
          <button>CLICK TO SCROLL</button>
        </SmoothScroll>
        <ScrollTarget _ref={scrollTargetRef}></ScrollTarget>
      </div>
    );
  }
