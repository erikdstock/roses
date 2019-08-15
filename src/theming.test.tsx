/** @jsx jsx */
import { jsx } from "@emotion/core"
import { themed, simpleThemed } from "./theming"
import { RosesTheme, RosesThemeObject } from "./Theme"
import renderer from "react-test-renderer"
import { baseTheme } from "./Theme/baseTheme"
import { matchers } from "jest-emotion"

const { colors: baseColors } = baseTheme as any
const theme = {
  ...baseTheme,
  colors: {
    ...baseColors,
    primary: "red",
    secondary: "green",
    muted: "tomato",
  },
}

const localTheme: RosesThemeObject = {
  ...theme,
  componentStyles: {
    Widget: {
      color: "primary",
      variants: {
        experimental: {
          color: "secondary",
        },
      },
    },
  },
}

expect.extend(matchers)

describe("themed()", () => {
  it("adds component themes + variants from the theme", () => {
    const DivWidget = themed("Widget")
    const tree = renderer.create(
      <RosesTheme theme={localTheme}>
        <DivWidget />
      </RosesTheme>
    )
    expect(tree.toJSON()).toMatchSnapshot()

    const tree2 = renderer.create(
      <RosesTheme theme={theme}>
        <DivWidget variant="experimental" />
      </RosesTheme>
    )
    expect(tree2.toJSON()).toMatchSnapshot()
  })

  it("has an sx prop for theme-aware styles", () => {
    const DivWidget = themed("Widget")
    const tree = renderer.create(
      <RosesTheme theme={localTheme}>
        <DivWidget sx={{ color: "muted" }} />
      </RosesTheme>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe("simpleThemed()", () => {
  it("makes a themed div by default", () => {
    const DivWidget = simpleThemed("Widget")
    const tree = renderer.create(
      <RosesTheme theme={localTheme}>
        <DivWidget />
      </RosesTheme>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("makes a themed other thing if you pass that tag in", () => {
    const MyHeader = simpleThemed("Header", "header")
    const tree = renderer.create(
      <RosesTheme theme={localTheme}>
        <MyHeader>Welcome to website.</MyHeader>
      </RosesTheme>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
