import styled from "@emotion/styled"
import { CSSObject } from "@styled-system/css"
import styledCss from "@styled-system/css"
import get from "lodash/get"

/** The base style for Box and everything on up. */
export const boxStyle: CSSObject = {
  boxSizing: "border-box",
}

interface ComposeOptions {
  variantBase?: string
}

const themeVariantsRoot: keyof RosesThemeObject = "variants"

/**
 * Wrap a base styled component with:
 *   - a responsive, theme-aware style `css` prop
 *   - a `variant` prop for accessing styles set on the theme.variants key
 */
export const withStyleProps = (
  Component: React.ComponentType<RosesStyleProps>,
  options: ComposeOptions = {}
) => {
  return styled(Component)<RosesStyleProps>(
    ({ rx }) => {
      if (rx) console.error(styledCss(rx))
      return rx && styledCss(rx)
    },
    ({ theme, variant }) => {
      if (variant) {
        const base = options.variantBase
          ? `${options.variantBase}`
          : themeVariantsRoot
        const variantCss = get(theme, `${base}.${variant}`)
        return variantCss && styledCss(variantCss)
      }
    }
  )
}
// /** Compose in the default style + variants for the key defined in your theme
//  * @example ```
//  * const theme = {
//  *   styles: {
//  *     Button: {
//  *       color: "blue"
//  *     }
//  *   }
//  * }
//  *
//  * const Button = styled('button')(ButtonProps, themed("Button"))
//  * ```
//  */
// export const themed = key => props => props.theme.styles[key]
