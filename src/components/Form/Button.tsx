import React from "react"
import { Button as BaseButton, ButtonProps } from "rebass"

// TODO: make disabled button states automatic, rather than variants??
// - could use alpha channel on a button variant's background color
// - could have smart disabled variant`s`, ie
// <Button variant="primary" disabled ...
//    ... => <BaseButton variant={disabled ? "disabled" : variant} ...
//  - This would add requirements to users on their themes though.
export const Button: React.FunctionComponent<ButtonProps> = props => (
  <BaseButton
    variant="primary"
    borderRadius={3}
    disabled={props.disabled || props.variant === "disabled"}
    {...props}
  />
)
