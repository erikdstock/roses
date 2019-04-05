import React from "react";
import { Button as ReButton } from "rebass";
// TODO: Block button, figure out how to document props

interface Props {
  variant?: string;
}
export const Button: React.FunctionComponent<Props> = (props: {
  variant?: string;
}) => (
  <ReButton
    variant="primary"
    disabled={props.disabled || props.variant === "disabled"}
    {...props}
  />
);
