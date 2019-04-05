import React from "react";
import { ThemeProvider } from "styled-components";
// import { defaultTheme, RebassTheme } from "./theme";
import { defaultTheme } from "./theme";

export { defaultTheme };

interface Props {
  // theme?: RebassTheme;
  theme?: object;
}


/**
 * A theme provider
 */
export const CommonsTheme: React.FunctionComponent<Props> = ({
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
