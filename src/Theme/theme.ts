import { Theme } from "styled-system"

const colors = {
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

// Default Breakpoints
const breakpoints = ["40em", "52em", "64em"]

// default fontSizes
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72]

// default space for margin and padding
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

// type NestedObjectOrArray<T> = T[] | { [K: string]: T | NestedObjectOrArray<T> }

interface CommonsTheme extends Theme {
  // colors: NestedObjectOrArray<CSS.ColorProperty>
  colors: any
}

export const defaultTheme: CommonsTheme = {
  breakpoints,
  colors,
  fontSizes,
  space,

  fonts: {
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
      backgroundColor: colors.gray[5],
      color: colors.white,
      disabled: true,
    },
  },
}
