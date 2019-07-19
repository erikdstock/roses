import React from "react"
import { render } from "../util/testUtils"
import { Button } from "./Button"

describe("Button", () => {
  const tree = render(<Button>Click me</Button>).toJSON()
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
})
