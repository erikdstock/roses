import { SystemStyleObject, Theme } from "@styled-system/css"
import * as CSS from "csstype"

type ObjectOrArray<T> = T[] | { [K: string]: T | ObjectOrArray<T> }

interface BaseThemeKnownColors {
  text: CSS.ColorProperty
  background: CSS.ColorProperty
  primary: CSS.ColorProperty
  secondary: CSS.ColorProperty
  muted: CSS.ColorProperty
}

interface RosesThemeColors extends BaseThemeKnownColors {
  [k: string]: CSS.ColorProperty | ObjectOrArray<CSS.ColorProperty>
}
/** The roses theme follows the styled-system/system-ui theme specification */
export type RosesThemeObject = Theme & {
  colors: RosesThemeColors
  /** Theme-ui html styles (incoming from baseTheme) */
  styles?: { [elementName: string]: SystemStyleObject }
  /** Roses html styles */
  htmlStyles?: { [elementName: string]: SystemStyleObject }
  /** Roses component styles */
  componentStyles?: { [componentName: string]: SystemStyleObject }
  /** Custom component variant styles */
  variants?: {
    [componentName: string]: { [variant: string]: SystemStyleObject }
  }
}
