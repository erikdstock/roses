import React from "react"
import { render } from "../util/testUtils"
import { Box, Flex } from "./Layout"

describe("Box", () => {
  const tree = render(<Box>Click me</Box>).toJSON()
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
})
describe("Flex", () => {
  const tree = render(<Flex>Click me</Flex>).toJSON()
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
})
