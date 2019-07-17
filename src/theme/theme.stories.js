import React from "react"

import { storiesOf } from "@storybook/react"
import { Box, Flex } from "../components/Layout"
import { Text } from "../components/Typography"
import { defaultTheme } from "./defaultTheme"
import _ from "lodash"

const ColorBox = props => (
  <Box rx={{ m: 2, textAlign: "center" }}>
    <Box
      rx={{
        mb: 1,
        py: "70px",
        width: "150px",
        height: "150px",
        bg: props.bg,
        borderRadius: 2,
      }}
      {...props}
    ></Box>
    <Text>{props.bg}</Text>
  </Box>
)

const { colors } = defaultTheme

const allColors = _.compact(
  _.flatten(
    Object.keys(colors).map(key => {
      if (key === "modes") return null
      const value = colors[key]
      if (typeof value === "string") return key
      if (typeof value === "object")
        // Not handling nested color objects more than one level deep - ie 'red.1'
        return Object.keys(value).map(innerKey =>
          value[innerKey] ? `${key}.${innerKey}` : null
        )
    })
  )
)

storiesOf("Theme", module)
  .addDecorator(storyFn => (
    <Flex rx={{ flexDirection: "row", flexWrap: "wrap", p: 3 }}>
      {storyFn()}
    </Flex>
  ))
  .add("Theme Object", () => {
    console.log(JSON.stringify(defaultTheme, null, 2))
    delete defaultTheme.styles
    return (
      <Text rx={{ fontFamily: "monospace" }}>
        {JSON.stringify(defaultTheme, null, 2)}
      </Text>
    )
  })
  .add("Colors", () => {
    return (
      <>
        {allColors.map(colorKey => (
          <ColorBox bg={colorKey} key={colorKey} />
        ))}
      </>
    )
  })
