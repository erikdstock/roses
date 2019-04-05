import React from "react"
import { Button as ReButton, ButtonProps } from "rebass"
// TODO: Block button, figure out how to document props

export const Button: React.FunctionComponent<ButtonProps> = props => (
  <ReButton
    variant="primary"
    disabled={props.disabled || props.variant === "disabled"}
    {...props}
  />
)
