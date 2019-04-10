import React from "react"
import { render } from "../../util/testUtils"
import { TextInput } from "./Input"

describe("Text TextInput", () => {
  describe("Default", () => {
    it("renders correctly", () => {
      const tree = render(
        <TextInput label="Name" placeholder="Hello" id="name" name="name" />
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("renders disabled state correctly", () => {
      const tree = render(
        <TextInput
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
        <TextInput
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
        <TextInput
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
        <TextInput
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
        <TextInput
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
