import { StyledComponent } from "@emotion/styled"
import { ResponsiveStyleValue, SystemStyleObject } from "@styled-system/css"
import { RosesThemeObject } from "./theme"

export type RosesSC<Inner = RosesStyleProps, Style = any> = StyledComponent<
  Inner,
  Style,
  RosesThemeObject
>
export interface RosesStyleProps {
  variant?: ResponsiveStyleValue<string>
  /** A SystemStyleObject - theme-aware css to be applied last (see @styled-system/css) */
  rx?: SystemStyleObject
}
