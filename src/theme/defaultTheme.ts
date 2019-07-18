import { baseTheme } from "./baseTheme"

const { text, background, primary, secondary, muted } = baseTheme.colors

const colors: RosesThemeObject["colors"] = {
  text,
  background,
  primary,
  secondary,
  muted,
  red: "#db1d33",
  black: "#000",
  white: "#fff",
  gray: {
    "1": "hsl(0,0%,32%)",
    "2": "hsl(0,0%,47%)",
    "3": "hsl(0,0%,58%)",
    "4": "hsl(0,0%,68%)",
    "5": "hsl(0,0%,77%)",
    "6": "hsl(0,0%,85%)",
    "7": "hsl(0,0%,93%)",
  },
}

const fonts: RosesThemeObject["fonts"] = {
  ...baseTheme.fonts,
  serif: "'Times New Roman', serif",
  body: "'Times New Roman', serif",
  sans: "'Arial', system-ui, sans-serif",
  heading: "'Arial', system-ui, sans-serif",
  monospace: "'Courier New', monospace",
}

const htmlStyles = baseTheme.styles
delete baseTheme.styles

export const defaultTheme: RosesThemeObject = {
  ...baseTheme,
  colors,
  fonts,
  radii: [0, 2, 3, 5, 10],
  htmlStyles,
  componentStyles: {
    Button: {
      display: "inline-block",
      background: "none",
      fontFamily: "sans",
      fontSize: 2,

      color: "inherit",
      border: "none",
      p: 2,
      m: 1,
      cursor: "pointer",
      outline: "inherit",
      borderRadius: 3,
      ":disabled": {
        bg: "gray.5",
        color: "muted",
      },
    },
    Card: {
      p: 2,
      m: 1,
      display: "inline-block",
      borderRadius: 2,
      boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
    },
  },
  variants: {
    Button: {
      primary: {
        color: "background",
        bg: "primary",
      },
      outline: {
        color: "primary",
        bg: "background",
        boxShadow: "inset 0 0 0 2px",
      },
    },
  },
}
