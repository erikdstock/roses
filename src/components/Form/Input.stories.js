import React from "react"

import { storiesOf, addDecorator } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Flex, Box } from "rebass"

import { TextInput } from "components/Form/Input"

storiesOf("Form/Input", module)
  .add("Text", () => (
    <Flex flexDirection="column" justifyContent="space-between" width="500px">
      <TextInput
        onClick={action("clicked")}
        placeholder="Name"
        name="input-name"
        id="input"
      />
    </Flex>
  ))
  .add("Bordered Text", () => (
    <Flex flexDirection="column" justifyContent="space-between" width="500px">
      <Box my={3}>
        <TextInput
          label="Name"
          withBorder
          placeholder="Hello"
          id="name"
          name="name"
        />
      </Box>
      <Box my={3}>
        <TextInput
          label="Email"
          withBorder
          error="Profit is Theft"
          placeholder="Error"
          id="email"
          name="email"
        />
      </Box>
      <Box my={3}>
        <TextInput
          id="pwd"
          name="password"
          label="Password"
          withBorder
          disabled
          placeholder="Disabled"
        />
      </Box>
    </Flex>
  ))
  .add("Bordered Text - Unlabeled", () => (
    <Flex width="500px">
      <TextInput withBorder type="password" placeholder="Enter Slogan" />
    </Flex>
  ))
