import { storiesOf } from '@storybook/react';
// import { WithFigma } from 'storybook-addon-figma';

import React from 'react';
import FlickitySlider from './';

storiesOf('FlickitySlider', module)
  .add('basic setup', () => [
    <style>
    {`.flickity-enabled {
      width: 20rem;
      height: 20rem;
    }
    img {
      width: 20rem;
      height: 20rem;
      object-fit: cover;
    }`}
    </style>,
    <FlickitySlider>
      <img src="https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="placeholder" />
      <img src="https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="placeholder" />
      <img src="https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="placeholder" />
      <img src="https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="placeholder" />
      <img src="https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="placeholder" />
    </FlickitySlider>
  ], {
    notes: 'Images inside of the FlickitySlider component must have a height.'
  });
