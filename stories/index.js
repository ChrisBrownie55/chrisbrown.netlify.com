import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';

import BaseInput from '../src/components/BaseInput';

storiesOf('BaseInput', module)
  .addDecorator(checkA11y)
  .add('basic setup', () => (
    <BaseInput label="Name" name="name"></BaseInput>
  ))
  .add('with placeholder', () => (
    <BaseInput label="Name" placeholder="Chris Brown" name="name"></BaseInput>
  ))
  .add('with bound value', () => (
    <ButtonWithHooks></ButtonWithHooks>
  ))

function ButtonWithHooks() {
  const [value, setValue] = useState('');
  function handleChange(event) {
    action('text changed')(event);
    setValue(event.target.value);
  }

  return [
    <BaseInput key={0} label="Name" name="name" value={value} onChange={handleChange}></BaseInput>,
    <p key={1}>Value: "{value}"</p>
  ]
}
