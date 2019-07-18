import { ThemeProvider } from "emotion-theming"
import React from "react"
// import { defaultTheme, RebassTheme } from "./theme";
import { defaultTheme } from "./defaultTheme"

export { defaultTheme }

interface Props {
  theme?: RosesThemeObject
}

/**
 * A theme provider
 */
export const RosesTheme: React.FunctionComponent<Props> = ({
  theme = defaultTheme,
  children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
