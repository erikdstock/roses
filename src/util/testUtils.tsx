import React from "react"
import renderer from "react-test-renderer"
import { RosesTheme } from "../Theme"

export const render = (tree: React.ReactNode) =>
  renderer.create(<RosesTheme>{tree}</RosesTheme>)
