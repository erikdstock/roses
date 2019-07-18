# 🌹 Roses 🌹

_React component library layered atop `emotion` and `@styled-system/css`. Built with Typescript._

### [_Skip to setup_](#setup)

`roses` is a simple, extendable design system. It's written with typescript and builds upon an _opinionated extension_ of the [`system-ui` interface](https://system-ui.com/theme), so type support is first-class.

It builds on the following libraries, so it's best to be familiar with them as well:

- [emotion](https://emotion.sh/docs/introduction) for css-in-js
- [styled-system](https://styled-system.com) for handy prop-based styles that cover most use cases - in particular `roses` opts for [styling using `@styled-system/css`](#the-rx-prop)

For more context and alternatives, see [Related Projects](#related-projects)

### I already know what this stuff is.

TLDR:

- Roses keeps all responsive styles in an `rx` prop using `@styled-system/css`.
- Simple components can be styled in the theme directly under the `componentStyles` and `variants` keys- use the `withStyleProps()` HOC which will first apply any `componentStyles` you've defined and add `rx` and `variant` props.
- More complex components can be defined like any other `emotion` component in the context of a `styled-system` theme.
- Good type support.

### Motivation

`roses` began as work on a design system for my own use- an extension of `rebass` using `styled-components` to build a library of reusable, themable components. Over time (and having never built a design system on my own) a couple pain points crept in:

_Emotion as the css-in-js library_: Early on I ran into some wrinkles around the styled-components' @types package. This was part of the motivation for switching to `emotion`. Additionally, it is smaller and (as of early 2019) rumoured to be more performant than styled-components.

_Responsive, theme-aware styles in a single prop_: Collaborators were less enthusiastic about the many `styled-system` props, especially when combined with the need to define Ts interfaces, account for the presence of a `theme` and know which props you could use where. By electing to restrict themed styles to a single prop, the total surface area of props to maintain and remember is greatly reduced. It is also designed to be more friendly to users who aren't completely sold on css-in-js. _Notably [this prop](#the-rx-prop) is baldly stolen from theme-ui._

_Define core component styles and variants on the theme_: Because the `system-ui` theme spec is wide open, different libraries have augmented it with their own keys. This is fine, but I wanted to introduce a bit of stability and the ability to define core component styles like those exported from [rebass](#related-projects) within the theme itself. `@styled-system/css` makes this pretty straightforward, so I settled on top-level keys of `componentStyles`, `variants` and `htmlStyles (TODO)`. The result is much less overhead in defining components that are at their hearts the composition of a `div` and a few style objects.

## Setup

Add the package and any missing peer dependencies:

```sh
yarn add roses @styled-system/css @emotion/core
# if using ts
# yarn add @types/styled-system__css @types/styled-system etc etc etc ...
```

### Configure `ThemeProvider`

All of your components must to be wrapped in an emotion `ThemeProvider` containing a theme object. You can bring your own from the [`emotion-theming` package](https://emotion.sh/docs/emotion-theming#themeprovider-reactcomponenttype) or import it directly for some extra type hints:

```js
import { RosesTheme, defaultTheme } from "roses"
// import { ThemeProvider } from 'emotion-theming'

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    white: "black",
    black: "white",
  },
}

// RosesTheme is just a rebranded ThemeProvider.
export const App = props => {
  return <RosesTheme theme={theme}>{props.everythingElse}</RosesTheme>
}
```

The `defaultTheme` export is an extension of the [theme-ui `base` preset](https://theme-ui.com/demo)

## Usage

### Defining components

Given a theme:

```js

// extending the default theme..
{
  ...defaultTheme
  breakpoints: ["780px"], // just a single breakpoint.
  radii: [0, "2px", "4px", "8px"],
  componentStyles: {
    Rectangle: {
      color: ["black", "red"] // at 1st breakpoint the text turns red for some reason.
      padding: 1,  // indexed to `space` key
      mx: 3
    },
    Widget: { ... }
  }
  variants: {
    Rectangle: {
      hot: {
        bg: "primary"
      }
      cold: { ... }
    }
  }
}
```

We can make a `Rectangle using the full api:

```js
const Rectangle = withStyleProps({
  name: "Rectangle",
  component: "div",
  defaultVariant: "hot",
})
```

... Or a string shorthand - with a default base component of `styled('div')({boxSizing: 'border-box'})`:

```js
const Widget = withStyleProps("Widget")
```

Since this is all just emotion in the context of a system-ui theme under the covers, you can also build more complex components (whose styles probably won't belong in your theme). See the `emotion`/`@styled-system/css` docs for more details.

### Variants

Variants defined in `theme.variants[ComponentName]` are accessible via the `variant` prop and applied over the base styles.

### The `rx` prop
**TODO: Clarify where the `/** @jsx jsx /**` pragma is required.**

_heavily inspired by [`theme-ui`'s `sx` prop](#)_.

The final styles applied come from the `rx` prop.

`theme-ui` introduced the `sx` prop. It seemed like a good idea, so `roses` decided to copy it. Similar to a vanilla react component's `styles` prop, `rx` accepts a [`SystemStyleObject`](#). This is a familiar extension of the vanilla `styles` api with the responsive, theme-aware values and shortcuts that `styled-system/css` introduced.

# Related projects

`roses` is heavily inspired by these projects:

- [rebass](https://rebassjs.org/) brings a layer of additional convention to styled-system with some UI primitives that you would have had to build anyway. It uses `styled-components`
- [theme-ui](https://theme-ui.com/) builds on the work of rebass, but makes the switch to `emotion` and includes built-in support for MDX.
- [system-ui](https://system-ui.com/theme/) is (to my knowledge) the original responsive theme spec from which `styled-system`, `rebass` and `theme-ui` grew.
- [@artsy/palette](https://palette.artsy.net/) was my first encounter with a production design system built styled-system. For Web and React Native/iOS.

# License
MIT for now.

# Contributors
Docs, PRs and Bug reports welcome. Contributors agree that this project may be relicensed in the future.