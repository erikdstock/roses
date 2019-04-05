import React from 'react'
import {Button} from './Button'
import renderer from 'react-test-renderer'

describe("Button", () => {
  const tree = renderer.create(<Button>Click me</Button>).toJSON()
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
  // it("is red by default", () => {
  //   expect(tree).toHaveStyleRule('background', colors.red)
  // })
  // it('is not 100% width by default', () => {
  //   expect(tree).toHaveStyleRule('width', undefined)
  // })
  // it("is white if `outline`", () => {
  //   expect(renderer.create(<Button outline>Click me</Button>).toJSON())
  //     .toHaveStyleRule('background', colors.white)
  // })
  // it("is 100% wide if `block`", () => {
  //   expect(renderer.create(<Button block>Click me</Button>).toJSON())
  //     .toHaveStyleRule('width', "100%")
  // })
})