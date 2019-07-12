import React from "react"

import { storiesOf, addDecorator } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Text, H1, H2, H3, H4 } from "./Typography"
import { Box, Flex } from "rebass"

storiesOf("Typography", module)
  .add("Headings", () => (
    <Box>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
    </Box>
  ))
  .add("Fonts", () => (
    <Box my={5} mx="auto" width="600px">
      <H3 fontFamily="sans">Sans</H3>
      <Text fontFamily="sans">
        New York City Democratic Socialists is the NYC local of Democratic
        Socialists of America, the largest socialist organization in the United
        States with about 30,000 members (as of November 2017). NYC-DSA is run
        by its 3,000+ members and activists who are working together to build a
        democratic socialist organization in the five boroughs. We are
        socialists because we share a vision of a humane social order based on
        popular control of resources and production, economic planning,
        equitable distribution, feminism, racial equality, and non-oppressive
        relationships.
      </Text>
      <H3 fontFamily="serif">Serif</H3>
      <Text fontFamily="serif">
        We are socialists because we are opposed to an economy organized for
        private profit that produces gross inequalities of wealth and power,
        discrimination based on race and sex, and brutality and violence in
        defense of the status quo. We are socialists because we want to work
        together to develop a concrete strategy for achieving that vision, for
        achieving a transition to democratic socialism in America.
      </Text>
      <H3 fontFamily="mono">Monospace</H3>
      <Text fontFamily="mono">
        We believe that such a strategy must acknowledge the class structure of
        American society and that this class structure means that there is a
        basic conflict of interest between those sectors with enormous economic
        power and the vast majority of the population. And we believe that only
        democratic movements and socialist parties can lead the way to a better
        world.
      </Text>
    </Box>
  ))