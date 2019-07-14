import React from "react"

import { storiesOf } from "@storybook/react"

import { Text, Heading, Example } from "./Typography"
import { Box } from "./Layout"

storiesOf("Typography", module)
  .add("Headings", () => (
    <Box>
      <Heading>Heading 1 (default: fontSize=5)</Heading>
      <Heading color="primary" fontSize={4}>
        Heading 2 (fontSize=4)
      </Heading>
      <Heading fontSize={3}>Heading 3</Heading>
      <Heading fontSize={2}>Heading 4</Heading>
      <Heading fontSize={1}>Heading 5</Heading>
      <Heading fontSize={0}>Heading 6 (fontSize=0)</Heading>
    </Box>
  ))
  .add("Fonts", () => (
    <Box my={4} mx="auto" width="600px">
      <Heading fontSize={3} fontFamily="sans">
        Sans
      </Heading>
      <Text fontFamily="sans">
        Minus consequuntur eligendi. Aliquid veritatis dolor ipsa amet. Nisi
        provident consequatur. Vitae et amet qui aut. Ullam rerum rerum illum
        sit ut cumque magni magni sed. Voluptatum ut autem.
        <br />
        Modi illo eveniet et dolorum harum eum adipisci et. Non vel officiis qui
        nulla molestias. Voluptatem qui id velit. Ipsam magni autem vitae optio
        sed autem animi tenetur doloribus. Id voluptatum ut commodi ut.
        <br />
        Laborum dignissimos et consequatur. Id et voluptatem enim qui voluptatem
        sint. Qui aut nam quisquam facilis illo corrupti nostrum.
      </Text>
      <Heading my={4} fontSize={3} fontFamily="serif">
        Serif
      </Heading>
      <Text fontFamily="serif">
        Consequatur minima sint eligendi ut et quae odit commodi. Harum veniam
        aut quaerat velit enim. Sint non consequatur rerum possimus blanditiis
        debitis incidunt est.
        <br />
        Maxime excepturi quisquam nesciunt repellendus. Fugit sint odit non
        dolor corrupti quia laudantium quia. Qui dolorem et qui et ut sint
        voluptates est quia.
        <br />
        Quaerat omnis laudantium nam dignissimos. Illum quis eveniet quae
        reiciendis velit recusandae distinctio et. Nisi suscipit optio harum. In
        error saepe. Vel reprehenderit eum voluptas sint dicta culpa qui quam
        rerum. Reiciendis facilis aliquid.
      </Text>
      <Heading mt={4} fontSize={3} fontFamily="monospace">
        Monospace
      </Heading>
      <Text fontFamily="monospace">Qui odio nulla.</Text>
      <Example />
    </Box>
  ))
