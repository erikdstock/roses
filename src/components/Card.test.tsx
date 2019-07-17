import React from "react"
import { render } from "../util/testUtils"
import { Card } from "./Card"

describe("Card", () => {
  const tree = render(<Card>Click me</Card>).toJSON()
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
})
