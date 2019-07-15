import { CSSObject } from "@emotion/core"
import styled from "@emotion/styled"
import { css as ssCss } from "@styled-system/css"
import themeGet from "@styled-system/theme-get"
import React from "react"
import * as SS from "styled-system"
// import {} from @emotion/core

const resetButtonStyle: CSSObject = {
  background: "none",
  color: "inherit",
  border: "none",
  padding: "0",
  font: "inherit",
  cursor: "pointer",
  outline: "inherit",
}

interface ButtonKnownProps
  extends RosesStyleProps,
    SS.FontWeightProps,
    SS.BorderProps,
    SS.BordersProps,
    SS.BorderColorProps,
    SS.BorderRadiusProps,
    SS.ButtonStyleProps {}

interface ButtonProps
  extends ButtonKnownProps,
    Omit<React.HTMLProps<HTMLButtonElement>, keyof ButtonKnownProps> {}

// TODO: make disabled button states automatic, rather than variants??
// - could use alpha channel on a button variant's background color
// - could have smart disabled variant`s`, ie
// <Button variant="primary" disabled ...
//    ... => <BaseButton variant={disabled ? "disabled" : variant} ...
//  - This would add requirements to users on their themes though.
export const Button: React.FunctionComponent<ButtonProps> = styled("button")(
  resetButtonStyle,
  SS.fontWeight,
  SS.border,
  SS.borders,
  SS.borderColor,
  SS.borderRadius,
  SS.buttonStyle,
  ssCss({
    bg: themeGet("buttons.primary.bg"),
  })
)
