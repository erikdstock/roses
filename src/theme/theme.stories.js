import React from "react"

import { storiesOf } from "@storybook/react"
import { Box, Flex } from "../components/Layout"
import { Text } from "../components/Typography"
import { defaultTheme } from "./theme"
import _ from "lodash"

const ColorBox = props => (
  <Box m={2} textAlign="center">
    <Box mb={1} py="70px" width="150px" height="150px" {...props}></Box>
    <Text>{props.bg}</Text>
  </Box>
)

const { colors } = defaultTheme
console.warn(colors)
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


storiesOf("Color", module)
  .addDecorator(storyFn => (
    <Flex flexDirection="row" flexWrap="wrap" p={3}>
      {storyFn()}
    </Flex>
  ))
  .add("Colors", () => {
    return (
      <>
        {allColors.map(colorKey => (
          <ColorBox bg={colorKey} key={colorKey} />
        ))}
      </>
    )
  })
