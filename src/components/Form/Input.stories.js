import React from "react"

import { storiesOf, addDecorator } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Flex, Box } from "rebass"

import { TextInput } from "components/Form/Input"

storiesOf("Form/Input", module)
  .add("Text", () => (
    <Flex mt={2} flexDirection="column" width="500px">
      <TextInput
        noBorder
        label="Name"
        placeholder="Hello"
        id="name"
        name="name"
      />
      <TextInput
        noBorder
        type="password"
        label="Password (With Error)"
        error="Profit is Theft"
        placeholder=""
        id="email"
        name="email"
      />
      <TextInput
        noBorder
        id="tnd"
        name="tendency"
        label="Tendency"
        disabled
        placeholder="Disabled"
      />
    </Flex>
  ))
  .add("Bordered Text", () => (
    <Flex mt={2} flexDirection="column" width="500px">
      <TextInput label="Name" placeholder="Hello" id="name" name="name" />
      <TextInput
        label="Email"
        error="Profit is Theft"
        placeholder="Error"
        id="email"
        name="email"
      />
      <TextInput
        id="pwd"
        name="password"
        label="Password"
        disabled
        placeholder="Disabled"
      />
    </Flex>
  ))
  .add("Bordered Text - Unlabeled", () => (
    <Flex mt={2} width="500px">
      <TextInput type="password" placeholder="Enter Slogan" />
    </Flex>
  ))
