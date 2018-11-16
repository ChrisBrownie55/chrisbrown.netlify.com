import { configure, addDecorator, setAddon } from '@storybook/react';

import { checkA11y } from '@storybook/addon-a11y';
import JSXAddon from 'storybook-addon-jsx';

import { setConfig } from 'react-hot-loader';

setConfig({ pureSFC: true });

addDecorator(checkA11y);
setAddon(JSXAddon);

const req = require.context('../src/components/', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
