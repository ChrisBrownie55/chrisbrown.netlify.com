import { storiesOf } from '@storybook/react';
import { WithFigma } from 'storybook-addon-figma';

import React from 'react';
import FlipCard from './';

storiesOf('FlipCard', module)
  .add('basic setup', () => (
    <FlipCard years={4} label="Test">
    </FlipCard>
  ));
