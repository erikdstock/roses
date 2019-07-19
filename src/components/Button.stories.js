import React from "react"

import { action } from "@storybook/addon-actions"
import { addDecorator, storiesOf } from "@storybook/react"
import { Flex } from "./Layout"

import { Button } from "components/Form/Button"

storiesOf("Form/Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("variants", () => (
    <Flex justifyContent="space-around">
      <Button variant="outline" onClick={action("clicked")}>
        Outline
      </Button>
      <Button disabled onClick={action("clicked")}>
        Disabled
      </Button>
    </Flex>
  ))
