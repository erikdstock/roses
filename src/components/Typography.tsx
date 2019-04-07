import React from "react"
import { Heading as BaseHeading, Text as BaseText, TextProps } from "rebass"

/* Alternative way to provide default styles to rebass components:
 * I feel like this can be better solved if there is ever a typescript design lib (keeping props interfaces etc)
 * const Text = styled(BaseText)``
 * Text.defaultProps = { m: "0 0 1em 0", ... }
 */

export const Text: React.FunctionComponent<TextProps> = props => (
  <BaseText
    color="gray.1"
    fontFamily="serif"
    fontWeight={400}
    fontSize={2}
    lineHeight={1.4}
    mb={4}
    {...props}
  />
)

export const Heading: React.FunctionComponent<TextProps> = props => (
  <BaseHeading
    color="gray.1"
    fontFamily="sans"
    fontWeight={400}
    lineHeight={1.2}
    m="1em 0"
    {...props}
  />
)

/* font-size as recommended by https://www.w3.org/TR/html5/rendering.html#sections-and-headings
 * h1 "2rem"
 * h2 "1.5rem"
 * h3 "1.17rem"
 * h4 "1.12rem"
 * h5 ".83rem"
 * h6 ".67rem"
 */

export const H1: React.FunctionComponent<TextProps> = props => (
  <Heading as="h1" fontSize="2rem" {...props} />
)
export const H2: React.FunctionComponent<TextProps> = props => (
  <Heading as="h2" fontSize="1.5rem" {...props} />
)
export const H3: React.FunctionComponent<TextProps> = props => (
  <Heading as="h3" fontSize="1.17rem" {...props} />
)
export const H4: React.FunctionComponent<TextProps> = props => (
  <Heading as="h4" fontSize="1.12rem" {...props} />
)
