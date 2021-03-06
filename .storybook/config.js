import { configure, addDecorator } from '@storybook/react';

import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import centered from '@storybook/addon-centered';

import { setConfig } from 'react-hot-loader';

setConfig({ pureSFC: true });

addDecorator(checkA11y);
addDecorator(withNotes);
addDecorator(centered);

const req = require.context('../src/components/', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
