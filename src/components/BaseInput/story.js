import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React, { useState } from 'react';
import BaseInput from './';

storiesOf('BaseInput', module)
  .add('basic setup', () => (
    <BaseInput label="Name" name="name" onChange={action('input changed')}></BaseInput>
  ), {
    notes: 'The attribute <code>label</code> is required.'
  })
  .add('with placeholder', () => (
    <BaseInput label="Name" placeholder="Chris Brown" name="name"></BaseInput>
  ))
  .add('with bound value', () => (
    <InputWithHooks></InputWithHooks>
  ))
  .add('with dark theme', () => (
    <div style={{backgroundColor: "#222", padding: "2rem"}}>
      <BaseInput theme="dark" label="Name" name="name"></BaseInput>
    </div>
  ))
  .add('with dark theme and placeholder', () => (
    <div style={{backgroundColor: "#222", padding: "2rem"}}>
      <BaseInput theme="dark" label="Name" placeholder="Chris Brown" name="name"></BaseInput>
    </div>
  ))
  .add('with theme color', () => (
    <div style={{"--theme-primary": "#fed766", backgroundColor: "#222", padding: "2rem"}}>
      <BaseInput label="Name" name="name" theme="dark"></BaseInput>
    </div>
  ));

function InputWithHooks() {
  const [value, setValue] = useState('');
  function handleChange(event) {
    setValue(event.target.value);
  }

  return [
    <BaseInput key={0} label="Name" name="name" value={value} onChange={handleChange}></BaseInput>,
    <p key={1}>Value: "{value}"</p>
  ];
}
