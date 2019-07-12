import styled from '@emotion/styled'
import { css as ssCss } from "@styled-system/css"
import themeGet from '@styled-system/theme-get'
import React from "react"
import { BoxProps } from "../layout"


const resetButtonStyle = css({
  background: "none",
  color: "inherit",
  border: "none",
  padding: "0",
  font: "inherit",
  cursor: "pointer",
  outline: "inherit",
})

interface ButtonProps extends BoxProps with  {}

// TODO: make disabled button states automatic, rather than variants??
// - could use alpha channel on a button variant's background color
// - could have smart disabled variant`s`, ie
// <Button variant="primary" disabled ...
//    ... => <BaseButton variant={disabled ? "disabled" : variant} ...
//  - This would add requirements to users on their themes though.
export const Button: React.FunctionComponent<ButtonProps> = styled('button')(resetButtonStyle, ssCss({
  bg: themeGet('buttons.primary.bg')
})
