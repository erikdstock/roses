/** @jsx jsx */
import { jsx } from "@emotion/core"
import { withStyleProps, themed } from "./styleComposition"
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
  },
}

expect.extend(matchers)

const render = (contents: React.ReactNode) =>
  renderer.create(<RosesTheme theme={theme}>{contents}</RosesTheme>)

describe("withStyleProps", () => {
  it("adds an rx prop that takes styled-system/css inputs", () => {
    const Widget = withStyleProps("div")
    const tree = render(<Widget rx={{ bg: "secondary" }} />)
    expect(tree.toJSON()).toMatchSnapshot()
    // expect(tree).toHaveStyleRule("background", "brown") //, { target: `${Widget}` })
  })
})

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
})
