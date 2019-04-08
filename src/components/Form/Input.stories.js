import React from "react"

import { storiesOf, addDecorator } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Flex, Box } from "rebass"

import { TextInput, BorderedTextInput } from "components/Form/Input"

storiesOf("Form/Input", module)
  .add("Text", () => (
    <Flex flexDirection="column" justifyContent="space-between" width="500px">
      <TextInput onClick={action("clicked")} placeholder="Hello" />
    </Flex>
  ))
  .add("Bordered Text", () => (
    <Flex flexDirection="column" justifyContent="space-between" width="500px">
      <Box mb={2}>
        <BorderedTextInput placeholder="Hello" />
      </Box>
      <Box mb={2}>
        <BorderedTextInput error="Profit is Theft" placeholder="Error" />
      </Box>
      <Box>
        <BorderedTextInput disabled placeholder="Disabled" />
      </Box>
    </Flex>
  ))
  .add("Bordered Text - Error", () => (
    <Flex width="500px">
      <BorderedTextInput error="Profit is Theft" placeholder="Hello" />
    </Flex>
  ))
