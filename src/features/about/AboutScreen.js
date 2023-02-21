import { Box, Center, Heading, Text } from "native-base"
import React from "react"

export const AboutScreen = () => {
  return (
    <Box flex={1} p={4} bg='muted.50'>
      <Center>
        <Heading>Jim Grace</Heading>
        <Text>Github: https://github.com/SO-JIMM</Text>
      </Center>
    </Box>
  )
}
