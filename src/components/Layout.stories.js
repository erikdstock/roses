import React from "react"

import { storiesOf } from "@storybook/react"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

import { action } from "@storybook/addon-actions"
import { Box, Flex, Card } from "rebass"
import { H1, H2, H3, H4 } from "./Typography"

storiesOf("Layout", module)
  .addDecorator(withKnobs)
  .add("Rebass Card", () => (
    <Card
      borderColor={text("borderColor", "red")}
      borderRadius={number("borderRadius", 3)}
      borderWidth={text("borderWidth", "2px")}
      borderStyle={text("borderStyle", "solid")}
      p={number("p", 3)}
    >
      <H1>Hi</H1>{" "}
    </Card>
  ))
  .add("Rebass Box", () => (
    <Box width="500px" height="500px" m={4} bg="gray.1">
      <H1>Box</H1>
    </Box>
  ))
  .add("Rebass Flex", () => (
    <Card bg="gray.2" borderRadius={3} p={2}>
      <Flex
        bg="gray.2"
        flexDirection="column"
        justifyContent="space-around"
        m={3}
        borderRadius={4}
      >
        <H1 color="white">Column Flex</H1>
        <H2 color="white">Column Flex</H2>
        <H3 color="white">Column Flex</H3>
        <Card
          radius={3}
          width="90%"
          height="300px"
          borderColor="red"
          bg="gray.7"
        >
          <Flex
            height="100%"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <H4>Row</H4>
            <H4>Row</H4>
            <H4>Row</H4>
          </Flex>
        </Card>
      </Flex>
    </Card>
  ))
