import styled from "@emotion/styled"
import ssCss, {
  CSSObject,
  ResponsiveStyleValue,
  SystemStyleObject,
} from "@styled-system/css"
import get from "lodash/get"
import React from "react"
import { RosesThemeObject } from "../Theme"
import { RosesSC } from "../types"

/** The base style for Box and everything on up. */
export const boxStyle: CSSObject = {
  boxSizing: "border-box",
}

interface RosesStyleProps {
  variant?: ResponsiveStyleValue<string>
  /** A SystemStyleObject - theme-aware css to be applied last (see @styled-system/css) */
  rx?: SystemStyleObject
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

/** Reach into the theme, get a style object, apply it with styledCss */
const themed: (path: string) => InterpolationFn = path => props => {
  const componentStyle = get(props.theme, path)
  return componentStyle && styledCss(componentStyle)
}

const themedComponent: (name: string) => InterpolationFn = (name: string) => {
  return themed(`${componentStylesRoot}.${name}`)
}

const rxHandler: InterpolationFn = ({ rx, ...r }) => {
  return rx && styledCss(rx)
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

interface ComposeStylesOptions {
  name: string
  defaultVariant?: string
  component?: React.ComponentType<any> | keyof JSX.IntrinsicElements
}

const themedBoxDiv: (n: string, defaultVariant?: string) => RosesSC = (
  name,
  defaultVariant
) =>
  styled("div")<RosesStyleProps>(
    boxStyle,
    themedComponent(name),
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
  options: ComposeStylesOptions | string
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
          themedComponent(options.name),
          variantHandler(options.name, options.defaultVariant),
          rxHandler
        )
      : themedBoxDiv(options.name, options.defaultVariant)
  }
}
