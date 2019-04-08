import React from "react"

import { storiesOf, addDecorator } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Flex, Box } from "rebass"

import { TextInput } from "components/Form/Input"

storiesOf("Form/Input", module)
  .add("Text", () => (
    <Flex mt={2} flexDirection="column" width="500px">
      <Box mb={3}>
        <TextInput
          noBorder
          label="Name"
          placeholder="Hello"
          id="name"
          name="name"
        />
      </Box>
      <Box my={3}>
        <TextInput
          noBorder
          type="password"
          label="Password (With Error)"
          error="Profit is Theft"
          placeholder=""
          id="email"
          name="email"
        />
      </Box>
      <Box my={3}>
        <TextInput
          noBorder
          id="tnd"
          name="tendency"
          label="Tendency"
          disabled
          placeholder="Disabled"
        />
      </Box>
    </Flex>
  ))
  .add("Bordered Text", () => (
    <Flex mt={2} flexDirection="column" width="500px">
      <Box mb={3}>
        <TextInput label="Name" placeholder="Hello" id="name" name="name" />
      </Box>
      <Box my={3}>
        <TextInput
          label="Email"
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
          disabled
          placeholder="Disabled"
        />
      </Box>
    </Flex>
  ))
  .add("Bordered Text - Unlabeled", () => (
    <Flex mt={2} width="500px">
      <TextInput type="password" placeholder="Enter Slogan" />
    </Flex>
  ))
