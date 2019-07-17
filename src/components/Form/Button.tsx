import styled from "@emotion/styled"
import { withStyleProps } from "../../util/styleComposition"

export const Button = withStyleProps("Button", styled("button")(), {
  defaultVariant: "primary",
})
