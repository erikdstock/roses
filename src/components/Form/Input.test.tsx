import React from "react"
import { render } from "../../util/testUtils"
import { Input } from "./Input"

describe("Text Input", () => {
  describe("Default", () => {
    it("renders correctly", () => {
      const tree = render(
        <Input label="Name" placeholder="Hello" id="name" name="name" />
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("renders disabled state correctly", () => {
      const tree = render(
        <Input
          disabled
          label="Name"
          placeholder="Hello"
          id="name"
          name="name"
        />
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("renders error state correctly", () => {
      const tree = render(
        <Input
          error="bad praxis"
          label="Name"
          placeholder="Hello"
          id="name"
          name="name"
        />
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
  describe("No Border", () => {
    it("renders correctly", () => {
      const tree = render(
        <Input
          noBorder
          label="Name"
          placeholder="Hello"
          id="name"
          name="name"
        />
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("renders disabled state correctly", () => {
      const tree = render(
        <Input
          disabled
          noBorder
          label="Name"
          placeholder="Hello"
          id="name"
          name="name"
        />
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("renders error state correctly", () => {
      const tree = render(
        <Input
          error="bad praxis"
          noBorder
          label="Name"
          placeholder="Hello"
          id="name"
          name="name"
        />
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
