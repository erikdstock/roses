import { StyledComponent } from "@emotion/styled"
import { SystemStyleObject } from "@styled-system/css"
import * as SS from "styled-system"
declare global {
  /** The roses theme follows the styled-system/system-ui theme specification */
  type RosesThemeObject = SS.Theme & {
    /** Theme-ui html styles */
    styles?: { [elementName: string]: SystemStyleObject }
    /** Roses html styles */
    htmlStyles?: { [elementName: string]: SystemStyleObject }
    /** Custom component variant styles */
    componentStyles?: {
      [componentName: string]: { [variant: string]: SystemStyleObject }
    }
  }

  /** A Roses Component is an emotion styled component,
   * in the context of a RosesTheme,
   * with additional styled-system props
   *
   */
  type RosesSC<Inner, Style = any> = StyledComponent<
    Inner,
    Style,
    RosesThemeObject
  >

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
