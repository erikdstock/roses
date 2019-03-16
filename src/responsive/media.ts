import { css, ThemedCssFunction } from "styled-components"

const breakpointOrder = ["xs", "s", "m", "l", "xl", "xxl"]
const BreakpointWidth: Record<string, number> = {
  xs: 480,
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
  xxl: 1400
}

const fonts: Record<string, number> = {
  null: 14,
  s: 16,
  m: 18,
  l: 20,
  xl: 24,
  xxl: 28
}

type BreakpointCssMap = Record<keyof typeof BreakpointWidth, ThemedCssFunction<any>>;

const mediaBase = (label: keyof typeof BreakpointWidth) => (...args: any[]) => css`
  line-height: 1.4;
  font-size: ${fonts[label]};
  ${args} 
`

export const respondTo = Object.keys(BreakpointWidth).reduce(
  (mediaQueries, label) => (
    {
      ...mediaQueries,
      [label]: (...args: any[]) => css`
        @media (min-width: ${BreakpointWidth[label]}px) {
          ${mediaBase(label)`${args}`}
        }
      `
    }
  ),
  {} as BreakpointCssMap
)

const getBreakpointMaxQuery = (label: keyof typeof BreakpointWidth) => {
  const nextBreakpointIndex = breakpointOrder.indexOf(label) + 1
  return breakpointOrder.length > nextBreakpointIndex
    ? css` and (max-width: ${BreakpointWidth[breakpointOrder[nextBreakpointIndex]] - 0.01}px)`
    : ""
}

export const respondOnlyTo: BreakpointCssMap = Object.keys(BreakpointWidth).reduce(
  (mediaQueries, label) => (
    {
      ...mediaQueries,
      [label]: (...args: any[]) => css`
        @media (min-width: ${BreakpointWidth[label]}px)${getBreakpointMaxQuery(label)} {
          ${mediaBase(label)`${args}`}
        }
      `
    }
  ),
  {} as BreakpointCssMap
)
