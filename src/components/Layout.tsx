import { Box, Flex } from "rebass"
import styled from "styled-components"
import {
  borderColor,
  BorderColorProps,
  BorderProps,
  borders,
} from "styled-system"

const BorderBox = styled(Box)<BorderProps & BorderColorProps>`
  ${borders}
  ${borderColor}
`

export { BorderBox, Box, Flex }
