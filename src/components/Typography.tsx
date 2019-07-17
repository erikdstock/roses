import styled from "@emotion/styled-base"
import styledCSS from "@styled-system/css"
import { boxStyle as baseStyle, withStyleProps } from "../util/styleComposition"

export const Text: RosesSC = withStyleProps(
  "Text",
  styled("div")(
    baseStyle,
    styledCSS({
      lineHeight: "body",
      whiteSpace: "pre-wrap",
      fontFamily: "body",
    })
  )
)

export const Heading: RosesSC = withStyleProps(
  "Heading",
  styled("div")(
    baseStyle,
    styledCSS({
      lineHeight: "heading",
      fontWeight: "heading",
      fontFamily: "heading",
      fontSize: 5,
    })
  )
)

export const Test = withStyleProps("Test", styled("div")(baseStyle))
