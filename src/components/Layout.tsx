import { Box, Flex } from "rebass"
import styled from "styled-components"
import {
  borderColor,
  BorderColorProps,
  BorderProps,
  borders,
  color,
  space,
} from "styled-system"

const BorderBox = styled(Box)<BorderProps & BorderColorProps>`
  ${color};
  ${space};
  ${borders};
  ${borderColor};
  border-width: 2px;
  border-style: solid;
`

export { BorderBox, Box, Flex }
