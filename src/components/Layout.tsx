import styled, { Interpolation, StyledComponent } from "@emotion/styled"
import styledCss from "@styled-system/css"
import get from "lodash/get"
import React from "react"
import { boxStyle as baseStyle, withStyleProps } from "../util/styleComposition"

// type StyledDivProps<T> = T & Omit<React.HTMLProps<HTMLDivElement>, keyof T>

// export interface BoxProps extends StyledDivProps<RosesStyleProps> {}

export const Box: RosesSC = withStyleProps(styled("div")(baseStyle))

export const Flex: RosesSC = withStyleProps(
  styled("div")(baseStyle, {
    display: "flex",
  })
)
