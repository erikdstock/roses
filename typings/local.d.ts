import { StyledComponent } from "@emotion/styled"
import { SystemStyleObject } from "@styled-system/css"
import * as CSS from "csstype"
import * as SS from "styled-system"

interface BaseThemeKnownColors {
  text: CSS.ColorProperty
  background: CSS.ColorProperty
  primary: CSS.ColorProperty
  secondary: CSS.ColorProperty
  muted: CSS.ColorProperty
}

declare global {
  interface RosesThemeColors extends BaseThemeKnownColors {
    [k: string]: CSS.ColorProperty | SS.ObjectOrArray<CSS.ColorProperty>
  }
  /** The roses theme follows the styled-system/system-ui theme specification */
  type RosesThemeObject = SS.Theme & {
    colors: RosesThemeColors
    /** Theme-ui html styles */
    styles?: { [elementName: string]: SystemStyleObject }
    /** Roses html styles */
    htmlStyles?: { [elementName: string]: SystemStyleObject }
    /** Custom component variant styles */
    variants?: {
      [componentName: string]: { [variant: string]: SystemStyleObject }
    }
  }

  /** A Roses Component is an emotion styled component,
   * in the context of a RosesTheme,
   * with additional styled-system props
   */
  type RosesSC<Inner = RosesStyleProps, Style = any> = StyledComponent<
    Inner,
    Style,
    RosesThemeObject
  >

  interface RosesStyleProps {
    variant?: SS.ResponsiveValue<string>
    /** A SystemStyleObject - theme-aware css to be applied last (see @styled-system/css) */
    rx?: SystemStyleObject
  }
}
