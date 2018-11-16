import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React, { useState, useContext } from 'react';
import BaseInput from './';
import ThemeContext from '../../contexts/theme.js';

storiesOf('BaseInput', module)
  .addWithJSX('basic setup', () => (
    <BaseInput label="Name" name="name" onChange={action('input changed')}></BaseInput>
  ))
  .addWithJSX('with placeholder', () => (
    <BaseInput label="Name" placeholder="Chris Brown" name="name"></BaseInput>
  ))
  .addWithJSX('with bound value', () => (
    <InputWithHooks></InputWithHooks>
  ), {
    onBeforeRender() {
      return `
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
}`;
    }
  })
  .addWithJSX('with dark theme', () => (
    <ThemeContext.Provider value="dark">
      <div style={{backgroundColor: "#222", padding: "2rem"}}>
        <ThemedInput></ThemedInput>
      </div>
    </ThemeContext.Provider>
  ), {
    notes: { markdown: 'The dark theme is passed in with `<BaseInput theme="dark"></BaseInput>' },
    onBeforeRender(domString) {
      const functionString = `
function ThemedInput() {
  const theme = useContext(ThemeContext);
  return (
    <BaseInput label="Name" name="name" theme={theme}></BaseInput>
  )
}

`;
      return functionString + domString.replace(/\[object Object\]/g, 'ThemeContext.Provider');
    }
  })
  .addWithJSX('with theme color', () => (
    <div style={{"--theme-primary": "#fed766"}}>
      <BaseInput label="Name" name="name"></BaseInput>
    </div>
  ))

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

function ThemedInput() {
  const theme = useContext(ThemeContext);
  return (
    <BaseInput label="Name" name="name" theme={theme}></BaseInput>
  );
}
