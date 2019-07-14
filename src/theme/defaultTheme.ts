import { baseTheme } from "./baseTheme"

const colors: RosesThemeObject["colors"] = {
  ...baseTheme.colors,
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

// TODO: Specify preferred keys (sans, serif, monospace, heading, body?)
const fonts: RosesThemeObject["fonts"] = {
  ...baseTheme.fonts,
  serif: "'Times New Roman', serif",
  body: "'Times New Roman', serif",
  sans: "'Arial', system-ui, sans-serif",
  heading: "'Arial', system-ui, sans-serif",
  monospace: "'Courier New', monospace",
}

export const defaultTheme: RosesThemeObject = {
  ...baseTheme,
  colors,

  fonts,
  radii: [0, 2, 3, 5, 10],
  htmlStyles: {
    ...baseTheme.styles,
  },
  componentStyles: {
    Button: {
      primary: {
        color: colors.white,
        backgroundColor: colors.red,
      },
      outline: {
        color: colors.red,
        backgroundColor: colors.white,
        boxShadow: "inset 0 0 0 2px",
      },
      inactive: {
        backgroundColor: colors.gray["5"],
        color: colors.white,
        disabled: true,
      },
    },
  },
}
