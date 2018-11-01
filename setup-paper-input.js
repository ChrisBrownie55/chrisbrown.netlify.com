const replace = require('replace-in-file')
console.log('[setup-paper-input.js]')

console.log('  Fixing placeholder colors for paper-input')
replace.sync({
  files: 'node_modules/@polymer/paper-input/paper-input.js',
  from: /color: var\(--paper-input-container-color, var\(--secondary-text-color\)\)/g,
  to: 'color: var(--paper-input-container-input-placeholder-color, var(--paper-input-container-color, var(--secondary-text-color)))'
})
console.log('  Done!')