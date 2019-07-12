import styled from "@emotion/styled"
import React from "react"

import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system"

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

interface BoxKnownProps extends LayoutProps, SpaceProps, ColorProps {}

export interface BoxProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps>{}

export const Box: React.FC<BoxProps> = styled("div")(
  {
    boxSizing: "border-box",
  },
  space,
  layout,
  color
)
export const Flex: React.FC<FlexboxProps & BoxProps> = styled(Box)(flexbox)

export const Foo = () => {
  return (
    <Box p={3}>
      <Flex flexDirection="row">Hi</Flex>
    </Box>
  )
}
