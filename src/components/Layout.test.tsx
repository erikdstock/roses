import { matchers } from "jest-emotion"
import React from "react"
import renderer from "react-test-renderer"
import { render as renderWithTheme } from "../util/testUtils"
import { Box, Flex } from "./Layout"

expect.extend(matchers)
describe("Box", () => {
  const tree = renderWithTheme(<Box>Click me</Box>).toJSON()
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
})
describe("Flex", () => {
  const tree = renderWithTheme(<Flex>Click me</Flex>).toJSON()
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
  it("is flex-direction: row by default", () => {
    const columnTree = renderer.create(<Flex>Hi</Flex>).toJSON()
    expect(columnTree).toHaveStyleRule("flex-direction", "row")
  })
  it("has a shortcut col prop for flex-direction: column", () => {
    const columnTree = renderer.create(<Flex col>Hi</Flex>).toJSON()
    expect(columnTree).toHaveStyleRule("flex-direction", "column")
  })
})
