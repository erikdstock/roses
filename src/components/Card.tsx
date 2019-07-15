import styled from "@emotion/styled"
import styledCss from "@styled-system/css"
import React from "react"
import { boxStyle as baseStyle, withStyleProps } from "../util/styleComposition"
import { Box } from "./Layout"

export const Card: RosesSC<RosesStyleProps> = withStyleProps(
  styled("div")(
    baseStyle,
    styledCss({
      p: 1,
      borderRadius: 2,
      boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
    })
  ),
  { variantBase: "variants.Card" }
)
