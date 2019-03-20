import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme, RebassTheme } from "./theme";

export { defaultTheme, RebassTheme };

interface Props {
  theme?: RebassTheme;
}


/**
 * A theme provider
 */
export const Theme: React.FunctionComponent<Props> = ({
  children,
  theme = defaultTheme
}) => (
  <ThemeProvider theme={theme}>
    <>
      {
        /* ThemeProvider Children must be a node, so Fragment </> is required */
        children
      }
    </>
  </ThemeProvider>
);
