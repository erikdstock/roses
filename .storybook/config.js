import React from "react"
import { configure, addDecorator } from "@storybook/react"
import { RosesTheme, defaultTheme } from "Theme"

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => {
    req(filename)
  })
}

addDecorator(storyFn => (
  <RosesTheme theme={defaultTheme}>{storyFn()}</RosesTheme>
))

configure(loadStories, module)
