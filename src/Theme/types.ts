import { SystemStyleObject, Theme, ThemeValue } from "@styled-system/css"
import * as CSS from "csstype"

export type ThemeColors = ThemeValue<CSS.ColorProperty>
export type ThemeFonts = ThemeValue<CSS.FontFamilyProperty>

type ObjectOrArray<T> = T[] | { [K: string]: T | ObjectOrArray<T> }

// interface BaseThemeKnownColors {
//   [k: string]: CSS.ColorProperty
//   // text: CSS.ColorProperty
//   // background: CSS.ColorProperty
//   // primary: CSS.ColorProperty
//   // secondary: CSS.ColorProperty
//   // muted: CSS.ColorProperty
// }

interface Variants {
  variants?: {
    [k: string]: SystemStyleObject
  }
}

type SystemStyleWithVariants = SystemStyleObject & Variants

// interface RosesThemeColors extends BaseThemeKnownColors {
//   [k: string]: CSS.ColorProperty | ObjectOrArray<CSS.ColorProperty>
// }

/** The roses theme follows the styled-system/system-ui theme specification */
export type RosesThemeObject = Theme & {
  // colors: RosesThemeColors
  /** HTML element styles (compatible with theme-ui) */
  styles?: { [elementName: string]: SystemStyleWithVariants }
  /** Roses component styles */
  componentStyles?: { [componentName: string]: SystemStyleWithVariants }
  /** Custom component variant styles */
}
