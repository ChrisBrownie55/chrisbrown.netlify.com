import { configure } from '@storybook/react';
import { setConfig } from 'react-hot-loader';
setConfig({ pureSFC: true });

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
