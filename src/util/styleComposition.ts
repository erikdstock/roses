import styled from "@emotion/styled"
import ssCss, { CSSObject, SystemStyleObject } from "@styled-system/css"

import get from "lodash/get"

/** Clumsily force styledCss function to believe that there will be a theme present */
type StyledCssFn = (o: SystemStyleObject) => CSSObject
const styledCss = ssCss as StyledCssFn

/** The base style for Box and everything on up. */
export const boxStyle: CSSObject = {
  boxSizing: "border-box",
}

const themeVariantsRoot: keyof RosesThemeObject = "variants"
const componentStylesRoot: keyof RosesThemeObject = "componentStyles"

interface StyledInterpolationProps extends RosesStyleProps {
  theme: RosesThemeObject
}

type InterpolationFn = (p: StyledInterpolationProps) => CSSObject | undefined

/** Reach into the theme, get a style object, apply it with styledCss */
const themed: (path: string) => InterpolationFn = path => props => {
  const componentStyle = get(props.theme, path)
  return componentStyle && styledCss(componentStyle)
}

const themedComponent: (name: string) => InterpolationFn = (name: string) => {
  // console.log("wrapping component with " + name + " styles")
  return themed(`${componentStylesRoot}.${name}`)
}

const rxHandler: InterpolationFn = ({ rx }) => rx && styledCss(rx)

type VariantHandler = (key: string, defaultVariant?: string) => InterpolationFn

const variantHandler: VariantHandler = (componentKey, defaultVariant) => ({
  theme,
  variant,
}) => {
  const selectedVariant = variant || defaultVariant
  if (selectedVariant) {
    const base = `${themeVariantsRoot}.${componentKey}`
    const variantCss = get(theme, `${base}.${selectedVariant}`)
    // console.log("variant: ", variantCss)
    return variantCss && styledCss(variantCss)
  }
}

interface ComposeStylesOptions {
  name: string
  defaultVariant?: string
  component?: React.ComponentType<any> | keyof JSX.IntrinsicElements
}

/** The default starting component */
const BaseBox = styled("div")(boxStyle)

/**
 * Wrap a base styled component with:
 *   - a responsive, theme-aware style `css` prop
 *   - a `variant` prop for accessing styles set on the theme.variants key
 * @example:
 * ```tsx
 *  const RawBox = styled('div')({boxSizing: 'border-box'})
 *
 *  const Box = withStyleProps({name: 'Box', component: RawBox, defaultVariant: "hot"})
 *  const Widget = withStyleProps('Widget')
 * ```
 */
export const withStyleProps: (
  options: ComposeStylesOptions | string
) => RosesSC = options => {
  if (typeof options === "string") {
    const name = options as keyof JSX.IntrinsicElements
    return styled(BaseBox)<RosesStyleProps>(
      themedComponent(name),
      variantHandler(name),
      rxHandler
    )
  } else {
    const component = options.component || BaseBox
    return styled(component as React.ComponentType<any>)<RosesStyleProps>(
      themedComponent(options.name),
      variantHandler(options.name, options.defaultVariant),
      rxHandler
    )
  }
}
