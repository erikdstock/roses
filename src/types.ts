import { StyledComponent } from "@emotion/styled"
import { SystemStyleObject } from "@styled-system/css"
import { RosesThemeObject } from "./Theme"

export type RosesSC<Inner = RosesStyleProps, Style = any> = StyledComponent<
  Inner,
  Style,
  RosesThemeObject
>

export type RosesStyledComponent = RosesSC

export interface RosesStyleProps {
  variant?: string
  /** A SystemStyleObject - theme-aware css to be applied last (see @styled-system/css) */
  sx?: SystemStyleObject
}
