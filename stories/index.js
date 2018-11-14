import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BaseInput from '../src/components/BaseInput';

storiesOf('BaseInput', module)
  .add('with label', () => (
    <BaseInput label="Name" name="name"></BaseInput>
  ))
  .add('with placeholder', () => (
    <BaseInput placeholder="Chris Brown" name="name"></BaseInput>
  ))
  .add('with label and placeholder', () => (
    <BaseInput label="Name" placeholder="Chris Brown" name="name"></BaseInput>
  ))
  .add('with bound value', function() {
    const [value, setValue] = useState('');
    function handleChange(event) {
      action('text entered')(event)
      setValue(event.target.value)
    }

    return (
      <BaseInput value={value} onChange={handleChange}></BaseInput>
    )
  })
