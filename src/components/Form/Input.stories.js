import React from "react"

import { storiesOf, addDecorator } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Flex, Box } from "../Layout"

import { Input } from "components/Form/Input"

storiesOf("Form/Input", module)
  .add("Text", () => (
    <Flex mt={2} flexDirection="column" width="500px">
      <Input noBorder label="Name" placeholder="Hello" id="name" name="name" />
      <Input
        noBorder
        type="password"
        label="Password (With Error)"
        error="Profit is Theft"
        placeholder=""
        id="email"
        name="email"
      />
      <Input
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
      <Input label="Name" placeholder="Hello" id="name" name="name" />
      <Input
        label="Email"
        error="Profit is Theft"
        placeholder="Error"
        id="email"
        name="email"
      />
      <Input
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
      <Input type="password" placeholder="Enter Slogan" />
    </Flex>
  ))
