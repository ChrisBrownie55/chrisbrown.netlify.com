import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React, { useContext } from 'react';
import FlatButton from './';

storiesOf('FlatButton', module)
  .add('basic setup', () => (
    <FlatButton onClick={action('clicked')}>Lorem Ip Sum</FlatButton>
  ))
  .add('with dark theme', () => (
    <div style={{backgroundColor: "#222", padding: "2rem"}}>
      <FlatButton theme="dark">Lorem Ip Sum</FlatButton>
    </div>
  ))
  .add('with round attribute', () => (
    <FlatButton round="">Lorem Ip Sum</FlatButton>
  ), {
    notes: `
      When you use the round attribute make sure to pass it an empty
      string (or any string), otherwise, React won't correctly pass down the
      attribute to the button.
    `
  });
