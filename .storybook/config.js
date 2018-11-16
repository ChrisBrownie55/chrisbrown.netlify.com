import { configure } from '@storybook/react';
import { setConfig } from 'react-hot-loader';
setConfig({ pureSFC: true });

const req = require.context('../src/components/', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
