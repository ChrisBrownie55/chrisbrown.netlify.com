import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

import React, { useContext } from 'react';
import FlatButton from './';
import ThemeContext from '../../contexts/theme.js';

storiesOf('FlatButton', module)
  .addDecorator(centered)
  .addWithJSX('basic setup', () =>(
    <FlatButton onClick={action('clicked')}>Lorem Ipsum</FlatButton>
  ));
