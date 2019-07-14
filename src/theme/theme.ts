import { baseTheme } from "./baseTheme"

const colors: RosesTheme["colors"] = {
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

export const defaultTheme: RosesTheme = {
  ...baseTheme,
  colors,

  // TODO: Extract, merge base theme & specify preferred keys (sans, serif, mono, heading, body?)
  fonts: {
    ...baseTheme.fonts,
    serif: "'IBM Plex Serif', serif",
    sans: "Chivo, Helvetica, Sans",
    mono: "'Fira Mono', monospace",
  },

  radii: [0, 2, 3, 5, 10],
  buttons: {
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
}
