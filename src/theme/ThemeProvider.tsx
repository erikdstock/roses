import { ThemeProvider } from "emotion-theming"
import React from "react"
// import { defaultTheme, RebassTheme } from "./theme";
import { defaultTheme } from "./defaultTheme"

export { defaultTheme }

interface Props {
  // theme?: RebassTheme;
  theme?: RosesThemeObject
}

/**
 * A theme provider
 */
export const RosesTheme: React.FunctionComponent<Props> = ({
  theme,
  children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
