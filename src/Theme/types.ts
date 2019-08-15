import { SystemStyleObject, Theme, ThemeValue } from "@styled-system/css"
import * as CSS from "csstype"

type ObjectOrArray<T> = T[] | { [K: string]: T | ObjectOrArray<T> }

interface BaseThemeKnownColors {
  text: CSS.ColorProperty
  background: CSS.ColorProperty
  primary: CSS.ColorProperty
  secondary: CSS.ColorProperty
  muted: CSS.ColorProperty
}

interface Variants {
  variants?: {
    [k: string]: SystemStyleObject
  }
}

type SystemStyleWithVariants = SystemStyleObject & Variants

interface RosesThemeColors extends BaseThemeKnownColors {
  [k: string]: CSS.ColorProperty | ObjectOrArray<CSS.ColorProperty>
}
interface RosesThemeFonts {
  // heading: ThemeValue<CSS.FontFamilyProperty>
  // text: ThemeValue<CSS.FontFamilyProperty>
  [k: string]: ThemeValue<CSS.FontFamilyProperty>
}
/** The roses theme follows the styled-system/system-ui theme specification */
export type RosesThemeObject = Theme & {
  fonts?: RosesThemeFonts
  colors: RosesThemeColors
  /** Theme-ui html styles (incoming from baseTheme) */
  styles?: { [elementName: string]: SystemStyleWithVariants }
  /** Roses html styles */
  htmlStyles?: { [elementName: string]: SystemStyleObject }
  /** Roses component styles */
  componentStyles?: { [componentName: string]: SystemStyleWithVariants }
  /** Custom component variant styles */
}
