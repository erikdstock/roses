import styled from "@emotion/styled"
import { boxStyle as baseStyle, themed } from "../theming"
import { RosesSC } from "../types"

export const Box: RosesSC = themed({
  name: "Box",
  component: styled.div(baseStyle),
})

interface FlexProps {
  /** shorthand for passing flex-direction: 'column' rather than 'row' */
  col?: boolean
}
export const Flex: RosesSC = themed({
  name: "Flex",
  component: styled.div<FlexProps>(
    baseStyle,
    {
      display: "flex",
    },
    ({ col }) => ({ flexDirection: col ? "column" : "row" })
  ),
})
