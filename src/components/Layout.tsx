import styled, { Interpolation, StyledComponent } from "@emotion/styled"
import styledCss from "@styled-system/css"
import get from "lodash/get"
import React from "react"
import { boxStyle as baseStyle, withStyleProps } from "../util/styleComposition"

export const Box: RosesSC = withStyleProps("Box", styled("div")(baseStyle))

export const Flex: RosesSC = withStyleProps(
  "Flex",
  styled("div")(baseStyle, {
    display: "flex",
  })
)
