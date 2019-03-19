
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
  red: "#DB1D33",
  text: "#024",
  blue: "#07c",
  black: "#000000",
  white: "#ffffff",
  faintGray: "#f0f0f0",
  lightGray: "#d5d5d5",
  darkGray: "#242423",
  inactiveGray: "#8f8f8f",
  uiGray: "#444444"
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
      border: `1px solid ${colors.red}`,
      boxShadow: 'inset 0 0 0 2px'
    }
  }
}