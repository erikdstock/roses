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

const themeVariantsRoot: keyof RosesThemeObject = "variants"
const componentStylesRoot: keyof RosesThemeObject = "componentStyles"

interface StyledInterpolationProps extends RosesStyleProps {
  theme: RosesThemeObject
}

type InterpolationFn = (p: StyledInterpolationProps) => CSSObject | undefined

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

const themeDiv = (name: string): RosesSC => {
  return styled("div", { shouldForwardProp: prop => isPropValid(prop) })<
    RosesStyleProps
  >(boxStyle, relevantStyles(`${componentStylesRoot}.${name}`), rxHandler)
}

const rxHandler: InterpolationFn = ({ rx }) => {
  return rx && styledCss(rx)
}

interface ThemedComponentOptions {
  name: string
  shouldForwardProp?: typeof isPropValid
  defaultVariant?: string
  component?: React.ComponentType<any> | keyof JSX.IntrinsicElements
}

export const themed = (
  options: ThemedComponentOptions | string
): RosesStyledComponent => {
  if (typeof options === "string") {
    const name = options as keyof JSX.IntrinsicAttributes
    return themeDiv(name)
  } else {
    const {
      component,
      shouldForwardProp = (prop: string) => prop !== "rx" && prop !== "variant",
      name,
    } = options

    return component
      ? styled(component as React.ComponentType<any>, { shouldForwardProp })<
          RosesStyleProps
        >(relevantStyles(`${componentStylesRoot}.${name}`), rxHandler)
      : themeDiv(`${componentStylesRoot}.${name}`)
  }
}

/** Reach into the theme, get a style object, apply it with styledCss */
const getThemeStyles: (path: string) => InterpolationFn = path => props => {
  const componentStyle = get(props.theme, path)
  return componentStyle && styledCss(componentStyle)
}

const getComponentStyles: (name: string) => InterpolationFn = (
  name: string
) => {
  return getThemeStyles(`${componentStylesRoot}.${name}`)
}

type VariantHandler = (key: string, defaultVariant?: string) => InterpolationFn

const variantHandler: VariantHandler = (componentKey, defaultVariant) => ({
  theme,
  variant,
}) => {
  const selectedVariant = variant || defaultVariant
  if (selectedVariant) {
    const base = `${themeVariantsRoot}.${componentKey}`
    const variantCss = get(theme, `${base}.${selectedVariant}`)
    return variantCss && styledCss(variantCss)
  }
}

const themedBoxDiv: (n: string, defaultVariant?: string) => RosesSC = (
  name,
  defaultVariant
) =>
  styled("div")<RosesStyleProps>(
    boxStyle,
    getComponentStyles(name),
    variantHandler(name, defaultVariant),
    rxHandler
  )

/**
 * Wrap a base styled component with:
 *   - a responsive, theme-aware style `rx` prop
 *   - a `variant` prop for accessing styles set on the theme.variants key
 * @example:
 *
 *  const RawBox = styled('div')({boxSizing: 'border-box'})
 *
 *  const Box = withStyleProps({name: 'Box', component: RawBox, defaultVariant: "hot"})
 *  const Widget = withStyleProps('Widget')
 *
 */
export const withStyleProps: (
  options: ThemedComponentOptions | string
) => RosesSC = options => {
  if (typeof options === "string") {
    const name = options as keyof JSX.IntrinsicElements
    return themedBoxDiv(name)
  } else {
    const component = options.component

    return component
      ? styled(component as React.ComponentType<any>, {
          shouldForwardProp: propName =>
            propName !== "rx" && propName !== "variant",
        })<RosesStyleProps>(
          getComponentStyles(options.name),
          variantHandler(options.name, options.defaultVariant),
          rxHandler
        )
      : themedBoxDiv(options.name, options.defaultVariant)
  }
}
