import styled from "@emotion/styled"
import styledCss, { CSSObject } from "@styled-system/css"
import get from "lodash/get"
import React from "react"
import { RosesThemeObject } from "./Theme"
import { RosesSC, RosesStyledComponent, RosesStyleProps } from "./types"
import isPropValid from "@emotion/is-prop-valid"

/** The base style for Box and everything on up. */
export const baseStyle: CSSObject = {
  // Type assertion is required here so that type
  // will not be widened by ts compiler to { boxSizing: string }
  boxSizing: "border-box" as "border-box",
}

type InterpolationFn = (
  p: RosesStyleProps & { theme: RosesThemeObject }
) => CSSObject | undefined

const componentStylesRoot: keyof RosesThemeObject = "componentStyles"

const validHtmlPropChecker = (prop: string) => {
  return isPropValid(prop)
}

/**
 * Add `sx` + `variant` props, get theme values
 * @param name The key under componentStyles where this component's styles will be located
 * @param as The type of element to return
 * // TODO: Test
 */
export const simpleThemed = (
  name: string,
  as: keyof JSX.IntrinsicElements = "div"
): RosesSC => {
  return styled<any, RosesStyleProps>(as, {
    shouldForwardProp: validHtmlPropChecker,
  })(baseStyle, relevantStyles(`${componentStylesRoot}.${name}`), sxHandler)
}

/** Because @styled-system/css returns a theme-ready function,
 *   but we are in that function now, just call it right away.
 *   This way we don't interpolate an additional function for
 *   emotion to execute.
 */
export const sxHandler: InterpolationFn = ({ sx, ...restProps }) => {
  return sx && styledCss(sx)(restProps)
}

/** Find styles, extract and apply them + variants using @styled-system/css */
// TODO: Refactor to allow passing styles + variants directly rather than putting them in the theme?
const relevantStyles = (themePath: string): InterpolationFn => props => {
  const { theme, variant } = props
  const { variants, ...styles } = get(theme, themePath, {})
  if (styles) {
    let selectedVariant
    if (variant && variants) {
      selectedVariant = variants[variant]
    }
    return styledCss({ ...styles, ...selectedVariant })(props)
  } else return {}
}

interface ThemedComponentOptions {
  name: string
  shouldForwardProp?: typeof isPropValid
  defaultVariant?: string
  component?: React.ComponentType<any> | keyof JSX.IntrinsicElements
}

/**
 * Wrap a base styled component with:
 *   - a responsive, theme-aware style `sx` prop
 *   - a `variant` prop for accessing styles set on the theme.variants key
 * @example:
 *
 *  const Box = themed({name: 'Box', component: RawBox, defaultVariant: "hot"})
 *  const Widget = themed('Widget')
 *
 */
export const themed = (
  options: ThemedComponentOptions | string
): RosesStyledComponent => {
  if (typeof options === "string") {
    const name = options as keyof JSX.IntrinsicAttributes
    return simpleThemed(name)
  } else {
    const {
      component,
      shouldForwardProp = (prop: string) => prop !== "sx" && prop !== "variant",
      name,
    } = options

    return component
      ? styled<React.ComponentType<any>, RosesStyleProps>(
          component as React.ComponentType<any>,
          { shouldForwardProp }
        )(relevantStyles(`${componentStylesRoot}.${name}`), sxHandler)
      : simpleThemed(`${componentStylesRoot}.${name}`)
  }
}
