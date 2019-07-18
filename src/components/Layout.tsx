import styled, { Interpolation, StyledComponent } from "@emotion/styled"

import { boxStyle as baseStyle, withStyleProps } from "../util/styleComposition"

export const Box: RosesSC = withStyleProps({
  name: "Box",
  component: styled("div")(baseStyle),
})

export const Flex: RosesSC = withStyleProps({
  name: "Flex",
  component: styled("div")(baseStyle, {
    display: "flex",
  }),
})
