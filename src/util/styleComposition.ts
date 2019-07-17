import styled from "@emotion/styled"
import ssCss, { CSSObject, SystemStyleObject } from "@styled-system/css"

import get from "lodash/get"
import { RosesTheme } from "../theme"

/** Clumsily force styledCss function to believe that there will be a theme present */
type StyledCssFn = (o: SystemStyleObject) => CSSObject
const styledCss = ssCss as StyledCssFn

/** The base style for Box and everything on up. */
export const boxStyle: CSSObject = {
  boxSizing: "border-box",
}

interface ComposeOptions {
  defaultVariant?: string
}

const themeVariantsRoot: keyof RosesThemeObject = "variants"
const componentStylesRoot: keyof RosesThemeObject = "componentStyles"

interface StyledInterpolationProps extends RosesStyleProps {
  theme: RosesThemeObject
}

type InterpolationFn = (p: StyledInterpolationProps) => CSSObject | undefined

/** Reach into the theme, get a style object, apply it with styledCss */
const themed: (path: string) => InterpolationFn = path => props => {
  console.warn(path, props.theme)
  const componentStyle = get(props.theme, path)
  console.warn("Applying Style: ", componentStyle)
  return componentStyle && styledCss(componentStyle)
}

const themedComponent: (
  name: string
) => (p: StyledInterpolationProps) => CSSObject | undefined = (
  name: string
) => {
  console.warn("wrapping component with " + name + " styles")
  return themed(`${componentStylesRoot}.${name}`)
}

const rxHandler: InterpolationFn = ({ rx }) => rx && styledCss(rx)

type VariantHandler = (key: string, op: ComposeOptions) => InterpolationFn

const variantHandler: VariantHandler = (componentKey, ops) => ({
  theme,
  variant,
}) => {
  const selectedVariant = variant || ops.defaultVariant
  if (selectedVariant) {
    const base = `${themeVariantsRoot}.${componentKey}`
    const variantCss = get(theme, `${base}.${selectedVariant}`)
    console.warn("variant: ", variantCss)
    return variantCss && styledCss(variantCss)
  }
}

/**
 * Wrap a base styled component with:
 *   - a responsive, theme-aware style `css` prop
 *   - a `variant` prop for accessing styles set on the theme.variants key
 * @example:
 * ```tsx
 *  const RawBox = styled('div')({boxSizing: 'border-box'})
 *  const Widget = withStyleProps('Box', RawBox, {})
 * ```
 */
// export const withStyleProps = <P extends RosesStyleProps>(
export const withStyleProps = (
  componentKey: string,
  Component: React.ComponentType<RosesStyleProps>,
  options: ComposeOptions = {}
) => {
  return styled(Component)<RosesStyleProps>(
    themedComponent(componentKey),
    variantHandler(componentKey, options),
    rxHandler
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
