import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React, { useState, useContext } from 'react';
import BaseInput from './';
import ThemeContext from '../../contexts/theme.js';

storiesOf('BaseInput', module)
  .add('basic setup', () => (
    <BaseInput label="Name" name="name"></BaseInput>
  ))
  .add('with placeholder', () => (
    <BaseInput label="Name" placeholder="Chris Brown" name="name"></BaseInput>
  ))
  .add('with bound value', () => (
    <InputWithHooks></InputWithHooks>
  ))
  .add('with dark theme', () => (
    <ThemeContext.Provider value="dark">
      <div style={{backgroundColor: "#222", padding: "2rem"}}>
        <ThemedInput></ThemedInput>
      </div>
    </ThemeContext.Provider>
  ))
  .add('with theme color', () => (
    <div style={{"--theme-primary": "#fed766"}}>
      <BaseInput label="Name" name="name"></BaseInput>
    </div>
  ))

function InputWithHooks() {
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

function ThemedInput() {
  const theme = useContext(ThemeContext);
  return (
    <BaseInput label="Name" name="name" theme={theme}></BaseInput>
  )
}
