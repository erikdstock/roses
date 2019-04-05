import React from "react"

import { storiesOf, addDecorator } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Box } from "rebass"

import { Input } from "components/Form/Input"

storiesOf("Form/Input", module).add("Text", () => (
  <Box width="500px">
    <Input onClick={action("clicked")} placeholder="Hello" />
  </Box>
))
