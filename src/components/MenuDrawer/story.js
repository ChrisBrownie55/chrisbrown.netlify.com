import { storiesOf } from '@storybook/react';
import { WithFigma } from 'storybook-addon-figma';

import React from 'react';
import MenuDrawer from './';

storiesOf('MenuDrawer', module)
  .add('basic setup', () => (
    <div style={{width: "100vw", height: "500vh", backgroundColor: "#222"}}>
      <MenuDrawer>
        <button>Lorem</button>
        <button>Ipsum</button>
        <button>Dolor</button>
        <button>Sit Amet</button>
      </MenuDrawer>
    </div>
  ));
