import * as SS from "styled-system"
import { StyledComponent } from "@emotion/styled"
import { SystemStyleObject } from "@styled-system/css"
declare global {
  // type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

  /** The roses theme follows the styled-system/system-ui theme specification */
  type RosesTheme = SS.Theme & {
    styles?: { [k: string]: SystemStyleObject }
  }

  /** A Roses Component is an emotion styled component,
   * in the context of a RosesTheme,
   * with additional styled-system props */
  type RosesSC<Inner, Style = any> = StyledComponent<Inner, Style, RosesTheme>

  interface BoxKnownProps
    extends SS.LayoutProps,
      SS.SpaceProps,
      SS.ColorProps,
      SS.FontWeightProps,
      SS.OrderProps,
      SS.FlexProps,
      SS.AlignSelfProps,
      SS.JustifySelfProps {}
}
