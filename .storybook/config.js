import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import {CommonsTheme} from 'Theme'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(storyFn => <CommonsTheme>{storyFn()}</CommonsTheme>)

configure(loadStories, module);
