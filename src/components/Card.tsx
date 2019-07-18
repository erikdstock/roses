import styled from "@emotion/styled"
import styledCss from "@styled-system/css"
import React from "react"
import { boxStyle as baseStyle, withStyleProps } from "../util/styleComposition"
import { Box } from "./Layout"

export const Card: RosesSC<RosesStyleProps> = withStyleProps({
  name: "Card",
})
