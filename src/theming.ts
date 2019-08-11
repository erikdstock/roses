import styled from "@emotion/styled"
import ssCss, { CSSObject, SystemStyleObject } from "@styled-system/css"
import get from "lodash/get"
import React from "react"
import { RosesThemeObject } from "./Theme"
import { RosesSC, RosesStyledComponent, RosesStyleProps } from "./types"
import isPropValid from "@emotion/is-prop-valid"

/** The base style for Box and everything on up. */
export const boxStyle: CSSObject = {
  boxSizing: "border-box",
}

/** Clumsily force styledCss function to believe that there will be a theme present */
type StyledCssFn = (o: SystemStyleObject) => CSSObject
const styledCss = ssCss as StyledCssFn

interface StyledInterpolationProps extends RosesStyleProps {
  theme: RosesThemeObject
}

type InterpolationFn = (p: StyledInterpolationProps) => CSSObject | undefined

const componentStylesRoot: keyof RosesThemeObject = "componentStyles"

const validHtmlPropChecker = (prop: string) => {
  // console.warn(prop, isPropValid(prop))
  return isPropValid(prop)
}

/**
 * Wrap a base styled component with:
 *   - a responsive, theme-aware style `sx` prop
 *   - a `variant` prop for accessing styles set on the theme.variants key
 * @example:
 *
 *  const Box = withStyleProps({name: 'Box', component: RawBox, defaultVariant: "hot"})
 *  const Widget = withStyleProps('Widget')
 *
 */
const themeDiv = (name: string): RosesSC => {
  return styled("div", { shouldForwardProp: validHtmlPropChecker })<
    RosesStyleProps
  >(boxStyle, relevantStyles(`${componentStylesRoot}.${name}`), sxHandler)
}

const sxHandler: InterpolationFn = ({ sx }) => {
  return sx && styledCss(sx)
}

const relevantStyles: (
  path: string
) => (
  props: RosesStyleProps & { theme: RosesThemeObject }
) => CSSObject = themePath => ({ theme, variant }): CSSObject => {
  const { variants, ...styles } = get(theme, themePath, {})
  if (styles) {
    if (variant && variants && Object.keys(variants).length) {
      const selectedVariant = variants[variant]

      return Object.keys(selectedVariant).length
        ? styledCss({ ...styles, ...selectedVariant })
        : styledCss(styles)
    } else {
      return styledCss(styles)
    }
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
 * @deprecated in favor of themed(), will be removed in 1.0.0
 *
 *  const Box = withStyleProps({name: 'Box', component: RawBox, defaultVariant: "hot"})
 *  const Widget = withStyleProps('Widget')
 *
 */
export const themed = (
  options: ThemedComponentOptions | string
): RosesStyledComponent => {
  if (typeof options === "string") {
    const name = options as keyof JSX.IntrinsicAttributes
    return themeDiv(name)
  } else {
    const {
      component,
      shouldForwardProp = (prop: string) => prop !== "sx" && prop !== "variant",
      name,
    } = options

    return component
      ? styled(component as React.ComponentType<any>, { shouldForwardProp })<
          RosesStyleProps
        >(relevantStyles(`${componentStylesRoot}.${name}`), sxHandler)
      : themeDiv(`${componentStylesRoot}.${name}`)
  }
}
