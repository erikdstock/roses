import { NONAME } from "dns";

/**
 * An interface matching what what rebass expects.
 * See https://rebassjs.org/theming
 */
export interface RebassTheme {
  /* Array of strings representing viewport widths to use for min-width media queries. */
  breakpoints?: string[]
  
  /* Array of numbers to use as a typographic scale */
  fontSizes?:	[number|string]
  
  /* Color names that can be used in color, bg, and borderColor props (nested objects can be accessed via dot notation) */
  colors?: object
  
  /* Array of numbers for use as margin and pixel values */
  space?: object

  /* Values for the fontFamily prop */
  fonts?: object
  
  /* Array or Object values for fontWeight prop */
  fontWeights?: object

  /* Array or Object	Values for lineHeight prop */
  lineHeights?: object

  /* 	Array or Object	Values for letterSpacing prop */
  letterSpacings?: object

  /* Array or Object	Values for boxShadow prop */
  shadows?:	object

  /* Array or Object	Values for border props */
  borders?: object

  /* Array or Object	Values for borderRadius props */
  radii?: object

  /* Array or Object	Values for opacity props */
  opacity?: object

  /* Styles for button varians */
  buttons: object
}

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
  }
}

export const defaultTheme: RebassTheme = {
  fonts: {
    serif: "'IBM Plex Serif', serif",
    sans: "Chivo, Helvetica, Sans",
    mono: "'Fira Mono', monospace"
  },

  colors,
  buttons: {
    primary: {
      color: colors.white,
      backgroundColor: colors.red,
    },
    outline: {
      color: colors.red,
      backgroundColor: colors.white,
      boxShadow: 'inset 0 0 0 2px'
    },
    inactive: {
      backgroundColor: colors.gray[5],
      color: colors.white,
      disabled: true
    },
  }
}