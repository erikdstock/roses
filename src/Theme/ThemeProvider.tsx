import { ThemeProvider } from "emotion-theming"
import React from "react"
import { defaultTheme } from "./defaultTheme"
import { RosesThemeObject } from "./types"

export { defaultTheme }

interface Props {
  theme?: RosesThemeObject
}

/**
 * A plain theme provider that, when type-checked, expects theme keys described
 * by roses (componentStyles, variants)
 */
export const RosesTheme: React.FunctionComponent<Props> = ({
  theme = defaultTheme,
  children,
}) => <ThemeProvider<RosesThemeObject> theme={theme}>{children}</ThemeProvider>
