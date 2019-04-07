import React from "react"
import { ThemeProvider } from "styled-components"
// import { defaultTheme, RebassTheme } from "./theme";
import { defaultTheme } from "./theme"

export { defaultTheme }

interface Props {
  // theme?: RebassTheme;
  theme?: object
}

/**
 * A theme provider
 */
export const RosesTheme: React.FunctionComponent<Props> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <>
      {
        /* ThemeProvider Children must be a node, so Fragment </> is required */
        children
      }
    </>
  </ThemeProvider>
)
