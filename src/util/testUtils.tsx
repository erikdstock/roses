import React from "react"
import renderer from "react-test-renderer"
import { RosesTheme } from "../Theme/ThemeProvider"

export const render = (tree: React.ReactNode) =>
  renderer.create(<RosesTheme>{tree}</RosesTheme>)
