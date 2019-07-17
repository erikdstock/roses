# 🌹 Roses 🌹

_Typed react component library layered on `emotion` and `@styled-system/css`_

## TODO: Update README: everything below is out of date and wrong.

`roses` is a simple, extendable design system. It builds on the following libraries, so it's best to be familiar with them as well:

- [styled-components](https://www.styled-components.com/) for css-in-js
- [styled-system](https://styled-system.com/) for handy prop-based styles that cover most use cases
- [rebass](https://rebassjs.org/) brings a layer of additional convention to styled-system

## Setup in your project

Add the package and any missing peer dependencies:

`yarn add roses @styled-system/css @emotion/core

## Usage

Because `roses` hooks into styled components you'll need use a `ThemeProvider` to give them access to this theme. Luckily we have one ready for you which you can extend if needed.

While the `styled-components` theme provider is very permissive in what it will accept as a theme, rebass and styled-system rely on a [specific set of properties](https://styled-system.com/theme-specification)- override these for more control over colors, spacing and more.


