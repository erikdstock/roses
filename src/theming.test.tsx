/** @jsx jsx */
import { jsx } from "@emotion/core"
import { themed } from "./theming"
import { RosesTheme } from "./Theme"
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

expect.extend(matchers)

describe("themed()", () => {
  const localTheme = {
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
