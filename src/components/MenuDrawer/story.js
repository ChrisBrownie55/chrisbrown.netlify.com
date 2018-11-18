import { storiesOf } from '@storybook/react';
import { WithFigma } from 'storybook-addon-figma';

import React from 'react';
import MenuDrawer from './';

storiesOf('MenuDrawer', module)
  .add('basic setup', () => (
    <MenuDrawer>
      <button>Lorem</button>
      <button>Ipsum</button>
      <button>Dolor</button>
      <button>Sit Amet</button>
    </MenuDrawer>
  ));
