import React from "react"
import renderer from "react-test-renderer"
import { TextInput } from "./Input"

describe("Text TextInput", () => {
  describe("Default", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <TextInput label="Name" placeholder="Hello" id="name" name="name" />
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("renders disabled state correctly", () => {
      const tree = renderer
        .create(
          <TextInput
            disabled
            label="Name"
            placeholder="Hello"
            id="name"
            name="name"
          />
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("renders error state correctly", () => {
      const tree = renderer
        .create(
          <TextInput
            error="bad praxis"
            label="Name"
            placeholder="Hello"
            id="name"
            name="name"
          />
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
  describe("No Border", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <TextInput
            noBorder
            label="Name"
            placeholder="Hello"
            id="name"
            name="name"
          />
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("renders disabled state correctly", () => {
      const tree = renderer
        .create(
          <TextInput
            disabled
            noBorder
            label="Name"
            placeholder="Hello"
            id="name"
            name="name"
          />
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    it("renders error state correctly", () => {
      const tree = renderer
        .create(
          <TextInput
            error="bad praxis"
            noBorder
            label="Name"
            placeholder="Hello"
            id="name"
            name="name"
          />
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
