import styled from "styled-components"
import { borderColor, borders, BorderColorProps, BorderProps } from "styled-system"
import { Box, Flex } from "rebass"

const BorderBox = styled(Box)<BorderProps & BorderColorProps>`
  ${borders}
  ${borderColor}
`

export { BorderBox, Box, Flex }
