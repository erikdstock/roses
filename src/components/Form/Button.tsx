import React from "react"
import { Button as ReButton, ButtonProps } from "rebass"

// TODO: make disabled button states automatic, rather than variants??
// Could use rgb/alpha if we wanted...
export const Button: React.FunctionComponent<ButtonProps> = props => (
  <ReButton
    variant="primary"
    borderRadius={3}
    disabled={props.disabled || props.variant === "disabled"}
    {...props}
  />
)
