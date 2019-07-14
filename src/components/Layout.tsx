import styled from "@emotion/styled"
import React from "react"
import * as SS from "styled-system"

type StyledDivProps<T> = T & Omit<React.HTMLProps<HTMLDivElement>, keyof T>

export interface BoxProps extends StyledDivProps<BoxKnownProps> {}

export const boxStyles = [
  {
    boxSizing: "border-box" as any,
  },
  SS.space,
  SS.layout,
  SS.color,
  SS.flex,
  SS.fontWeight,
  SS.order,
  SS.alignSelf,
  SS.justifySelf,
]

export const Box: RosesSC<BoxProps> = styled("div")(...boxStyles)

interface FlexKnownProps extends BoxKnownProps, SS.FlexboxProps {}
export type FlexProps = StyledDivProps<FlexKnownProps>

export const Flex: RosesSC<FlexProps> = styled(Box)(SS.flexbox, {
  display: "flex",
})
