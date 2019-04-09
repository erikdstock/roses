import React from "react"
import renderer from "react-test-renderer"
import { Button } from "./Button"

describe("Button", () => {
  const tree = renderer.create(<Button>Click me</Button>).toJSON()
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
})
