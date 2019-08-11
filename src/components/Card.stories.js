import React from "react"

import { action } from "@storybook/addon-actions"
import { addDecorator, storiesOf } from "@storybook/react"
import { Card } from "./Card"
import { Heading } from "./Typography"

storiesOf("Card", module)
  .add("with text", () => (
    <Card>
      <Heading>Hello Card</Heading>
    </Card>
  ))
  .add("with shadow", () => (
    <Card variant="shadow">
      <Heading>Hello Card</Heading>
    </Card>
  ))
