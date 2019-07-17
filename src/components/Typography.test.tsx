import React from "react"
import { render } from "../util/testUtils"
import { Heading, Text } from "./Typography"

describe("Heading", () => {
  const tree = render(<Heading>Click me</Heading>).toJSON()
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
})
describe("Text", () => {
  const tree = render(<Text>Click me</Text>).toJSON()
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
})
